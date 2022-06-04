import React, { useState } from "react";

import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Step1 from "./Step1";
import Step2 from "./Step2";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  field: {
    borderRadius: "30px",
  },

  btn: {
    width: "340px",
    margin: "18px 0",
    padding: "15px 20px",
  },
}));

const Form = () => {
  const [step, setStep] = useState(1);

  const classes = useStyles();

  const onSubmitStep1 = (mobile) => {
    setStep((prevState) => prevState + 1);
  };

  const onSubmitStep2 = (code)=> {
    
  }

  return <>{step === 1 ? <Step1 onSubmit={onSubmitStep1} /> : <Step2 onSubmit={onSubmitStep2} />}</>;
};

export default Form;
