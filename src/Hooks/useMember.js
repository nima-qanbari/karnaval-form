import { useContext } from "react";

import { MemberContext } from "../Context/MemberContext";

export const useMember = () => {
  const { member, loading, setMember } = useContext(MemberContext);
  return [member, loading, setMember];
};


