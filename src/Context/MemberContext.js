import React, { useState, createContext, useEffect } from 'react'

import { httpRequest } from '../Utils/HttpRequest'

export const MemberContext = createContext()

const MemberContextProvider = ({children}) => {

    
    const [loading, setLoading] = useState(false)
    const [member, setMember] = useState(null)

    const loadMember = async () => {
        try {
            setLoading(true)
            const memberRequest =  await httpRequest(`query AuthMemberMeQuery {
                me {
                    _id
                    name
                    family
                    avatarUrl
                    coverUrl
                    username
                    phone
                }
            }`)
            setMember(memberRequest.data.me)

        } catch (error) {
        
        }finally{
            setLoading(false)
        }
    }
    useEffect(() => {
        (async() => {
            await loadMember() 
        })()

   

    },[])
  return (
    <MemberContext.Provider value={{member, setMember ,loading, loadMember}}>
        {children}
    </MemberContext.Provider>
  )
}   

export default MemberContextProvider