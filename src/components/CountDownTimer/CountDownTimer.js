import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
timer: {
    color: "red",
    margin: "10px 20px 25px",
    userSelect: "none",
},

resend: {
  fontFamily: theme.typography.fontFamily,
  fontSize: "13px",
  cursor: "pointer",
}
  
  }));
  

const CountDownTimer = () => {
  const [timer, setTimer] = useState(120);

  const classes = useStyles()

  useEffect(() => {

      const intervalId = setInterval(() => {
          if(timer > 0) {
            setTimer(timer - 1)
        }else {
            return 0
        }
      }, 1000)
      return () => clearTimeout(intervalId)

  }, [timer]);

  function convertHMS(value) {
    const sec = parseInt(value, 10); // convert value to number if it's string
    let hours   = Math.floor(sec / 3600); // get hours
    let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
    let seconds = sec - (hours * 3600) - (minutes * 60); //  get seconds
    // add 0 if value < 10; Example: 2 => 02
    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return minutes+':'+seconds; // Return is MM : SS
}

const clickHandler = () => {
  setTimer(120)
}

  return (
    <div className={classes.timer}>
    {timer === 0 ? <p className={classes.resend} onClick={clickHandler}>ارسال مجدد کد</p> : convertHMS(timer)}
    </div>
  );
};

export default CountDownTimer;
