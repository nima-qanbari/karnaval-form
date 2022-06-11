import React, { useState } from "react";


import Step1 from "../../components/steps/Step1";
import Step2 from "../../components/steps/Step2";
import Step3 from "../../components/steps/Step3";

const Form = ({ onSubmit1, onSubmit2, onSubmit3, onTimeOut, onSuccess }) => {
  const [mobile, setMobile] = useState("");
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const onSubmitStep1 = async (mobile) => {
    try {
      setLoading(true);
      await onSubmit1(mobile);
      setMobile(mobile);
      setError(null);
      setStep((prevState) => prevState + 1);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const onSubmitStep2 = async (code) => {
    try {
      setLoading(true);
      const member = await onSubmit2(mobile, code);
      setError(null);
      if (!member.name || !member.family) {
        setStep((prevState) => prevState + 1);
      } else {
        onSuccess()
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  const onSubmitStep3 = async(data) => {
    try {
     
      await onSubmit3(data)
      onSuccess()
      
    } catch (error) {
      
    }
  }
  return (
    <>
      {step === 1 ? (
        <Step1 onSubmit={onSubmitStep1} error={error} loading={loading} />
      ) : step === 2 ? (
        <Step2
          onTimeOut={() => onTimeOut(mobile)}
          onSubmit={onSubmitStep2}
          error={error}
          loading={loading}
        />
      ) : (
        <Step3 onSubmit={onSubmitStep3} />
      )}
    </>
  );
};

export default Form;
