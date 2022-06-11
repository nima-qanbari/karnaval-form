import { httpRequest } from "./HttpRequest";

export const onSubmit1 = async (mobile) => {
    await httpRequest(
      `mutation AuthCreatePhoneVerificationMutation($phone: String!, $isSecondAttempt:Boolean!){
      createPhoneVerification(phone: $phone, isSecondAttempt:$isSecondAttempt) {
          phone
      }
  }`,
      { phone: `${mobile}`, isSecondAttempt: false }
    );
  };

  export const onSubmit2 = async (mobile, code) => {
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
    console.log(response);
    
    return response.data.loginByPhoneVerification.member;
  };

  export const onSubmit3 = async (data) => {
     const response = await httpRequest(
      `mutation UpdateProfileMutation($input: UpdateProfileInput!) {
      updateProfile(input: $input) {
        member {
          name
          family
          username
          link
        }
      }
    }`,
      { input: { name: `${data.name}`, family: `${data.family}` } }
    );

    console.log(response);
  };