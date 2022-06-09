import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

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

const Step2 = ({ onSubmit, onTimeOut, error: propErrors, loading }) => {
  const [codeValue, setCodeValue] = useState("");

  const [error, setError] = useState(null);

  const navigate = useNavigate()
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
      navigate("/dashboard")
      
    }
  };

  return (
    <div>
      <CountDownTimer onTimeOut={onTimeOut}/>
      <form className={classes.form} onSubmit={clickHandler}>
        <CodeInput2 value={codeValue} onChange ={setCodeValue} error={error || propErrors}  helperText={error || propErrors }/>
        <Button
          type="submit"
          className={classes.btn}
          color="primary"
          variant="contained"
          disabled={loading}
        >
          ورود
        </Button>
      </form>
    </div>
  );
};

export default Step2;
