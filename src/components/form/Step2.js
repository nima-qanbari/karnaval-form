import React, { useState } from "react";
import { Button } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import CodeInput2 from "./CodeInput2";
import CountDownTimer from "../CountDownTimer/CountDownTimer";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  field: {
    borderRadius: "30px",
  },

  btn: {
    width: "340px",
    margin: "25px 0",
    padding: "15px 20px",
  },
}));

const number = /^[0-9]*$/;

const Step2 = ({ onSubmit }) => {
  const [codeValue, setCodeValue] = useState("");
  console.log(codeValue);
  const [error, setError] = useState(null);
  const classes = useStyles();

  // const onchangeHandler = (e) => {
  //   setCodeValue(e);
  // };

  const clickHandler = (e) => {
    e.preventDefault();
    if (!codeValue) {
      setError("کد را وارد کنید!");
    } else if (!number.test(codeValue)) {
      setError("کد نامعتبر است!");
    }
    else if(codeValue.length !== 5) {
      setError("کد نامعتبر است!") 
    } 
    else {
      setError(null);
      onSubmit(codeValue);
    }
  };

  return (
    <div>
      <CountDownTimer />
      <form className={classes.form} onSubmit={clickHandler}>
        <CodeInput2 value={codeValue} onChange ={setCodeValue} error={error} helperText={error}/>
        <Button
          type="submit"
          className={classes.btn}
          color="primary"
          variant="contained"
        >
          ورود
        </Button>
      </form>
    </div>
  );
};

export default Step2;
