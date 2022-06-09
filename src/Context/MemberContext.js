import React, { useState, createContext, useEffect } from 'react'

import { httpRequest } from '../Utils/HttpRequest'

export const MemberContext = createContext()

const MemberContextProvider = ({children}) => {
    
    const [loading, setLoading] = useState(false)
    const [member, setMember] = useState(null)
    useEffect(() => {
        (async() => {
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
      
        })()

   

    },[])
  return (
    <MemberContext.Provider value={{member, loading}}>
        {children}
    </MemberContext.Provider>
  )
}   

export default MemberContextProvider