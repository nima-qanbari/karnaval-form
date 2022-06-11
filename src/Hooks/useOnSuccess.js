import {useContext} from 'react'
import { useNavigate } from 'react-router-dom';

import { MemberContext } from "../Context/MemberContext";

export const useOnSuccess = () => {
    const navigate = useNavigate();
    const { loadMember } = useContext(MemberContext);
    const onSuccess = async () => {
        await loadMember();
        navigate("/dashboard");
      };

  return onSuccess 
   
  
}

