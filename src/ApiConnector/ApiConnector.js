import React from "react";
import axios from "axios";
import Form from "../components/form/Form";

const BASE_URL = "https://sandbox-api.karnaval.ir/graphql";

const checkForError = (response) => {
  const message =
    response.errors &&
    response.errors.map((item) => item.messages.join("\n")).join("\n");

  if (message) {
    throw new Error(message);
  }
};

const httpRequest = async (query, variables) => {

  //interceptor
  axios.interceptors.request.use(function (config) {
    console.log("config",config);
    const token = localStorage.getItem("token")
    if(token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);

  });
  const response = await axios.post(BASE_URL, { query, variables });
  checkForError(response.data);
  return response.data;
};

const ApiConnector = () => {
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
 
    localStorage.setItem("token",response.data.loginByPhoneVerification.accessToken);
  };

  return (
    <Form onTimeOut={onSubmit1} onSubmit1={onSubmit1} onSubmit2={onSubmit2} />
  );
};

export default ApiConnector;
