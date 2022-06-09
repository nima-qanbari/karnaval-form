import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useMember } from '../../Hooks/useMember';

const CheckNotLogin = ({children}) => {
    const [member, loading] = useMember();
    const navigate = useNavigate()
    
    console.log(member, loading);
    useEffect(() => {
        if(!loading && !member){
            navigate("/")
        }
    }, [member, loading]);

    return  loading ? <h1>loading...</h1> : member ? children : null
}

export default CheckNotLogin