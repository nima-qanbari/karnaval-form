import React from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/form/Form";
import { httpRequest } from "../Utils/HttpRequest";

const ApiConnector = () => {
  const navigate = useNavigate();

  const onSuccess = () => {
    navigate("/dashboard");
  };
  const onSubmit1 = async (mobile) => {
    await httpRequest(
      `mutation AuthCreatePhoneVerificationMutation($phone: String!, $isSecondAttempt:Boolean!){
      createPhoneVerification(phone: $phone, isSecondAttempt:$isSecondAttempt) {
          phone
      }
  }`,
      { phone: `${mobile}`, isSecondAttempt: false }
    );
  };

  const onSubmit2 = async (mobile, code) => {
    const response = await httpRequest(
      `mutation AuthLoginByPhoneVerificationMutation($phone: String!, $code:String!){
      loginByPhoneVerification(phone: $phone, code:$code) {
          accessToken
          refreshToken
          member {
              name
              family
              username
              url
          }
      }
  }`,
      { phone: `${mobile}`, code: `${code}` }
    );

    localStorage.setItem(
      "token",
      response.data.loginByPhoneVerification.accessToken
    );
    return response.data.loginByPhoneVerification.member;
  };

  return (
    <Form
      onTimeOut={onSubmit1}
      onSubmit1={onSubmit1}
      onSubmit2={onSubmit2}
      onSuccess={onSuccess}
    />
  );
};

export default ApiConnector;
