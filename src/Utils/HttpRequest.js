import axios from "axios";

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


  export {httpRequest}