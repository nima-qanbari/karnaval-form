import { useMember } from "./useMember"

export const useLogout = () => {
    const [,,setMember] = useMember()
   return () => {
     localStorage.removeItem("token") 
     setMember(null)  
    }
}

