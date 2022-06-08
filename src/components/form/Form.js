import React, { useState } from "react";


import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";


const Form = () => {
  const [step, setStep] = useState(1);

  const onSubmitStep1 = (mobile) => {
    setStep((prevState) => prevState + 1);
  };

  const onSubmitStep2 = (code)=> {
    setStep((prevState) => prevState + 1);
  }

  return (
  <>
  {step === 1 ? <Step1 onSubmit={onSubmitStep1} /> :step === 2 ? <Step2 onSubmit={onSubmitStep2} /> :  <Step3 /> }
  </>
  );
};

export default Form;
