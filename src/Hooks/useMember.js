import { useContext } from "react";

import { MemberContext } from "../Context/MemberContext";

export const useMember = () => {
  const { member, loading } = useContext(MemberContext);
  return [member, loading];
};


