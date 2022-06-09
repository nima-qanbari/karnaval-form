import React, { useEffect } from "react";
import { useMember } from "../../Hooks/useMember";
import { useNavigate } from "react-router-dom";

const CheckLogin = ({children}) => {
  const [member, loading] = useMember();
  const navigate = useNavigate()

  useEffect(() => {
      if(!loading && member){
          navigate("/dashboard")
      }
  }, [member, loading]);

  return loading ? <h1>loading...</h1> : !member ? children : null;
};

export default CheckLogin;
