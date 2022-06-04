import React, { useRef } from "react";

import { makeStyles } from "@material-ui/styles";
import { Input } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  line: {
    width: "20px",
    margin: " 0 10px",
    border: "none",
    borderBottom: "1px solid #000",
    outline: "none",
  },
  textAlign: {
    textAlign: "center",
  },
}));

const CodeInput = ({ onChange, value }) => {
  const pin1Ref = useRef(null);
  const pin2Ref = useRef(null);
  const pin3Ref = useRef(null);
  const pin4Ref = useRef(null);
  const pin5Ref = useRef(null);

  const classes = useStyles();

  const changeHandler = (v, index) => {
    const refs = [pin1Ref, pin2Ref, pin3Ref, pin4Ref, pin5Ref];
    const nextRef = refs[index + 1];
    const prevRef = refs[index - 1];

    const newValue = [""];

    const lastNumber = v[v.length - 1];

    console.log(lastNumber);
    if (!isNaN(v)) {
      for (let i = 0; i <= 4; i++) {
        if (index === i) {
          newValue[i] = lastNumber;
        } else {
          newValue[i] = value[i] || null;
        }
      }

      onChange(newValue.join(""));

      if (nextRef && v) {
        nextRef.current.focus();
      }
        if (v === "") {
          prevRef.current.focus();
        }
     
    }
  };

  const focusHandler = () => {

  }

  return (
    <div dir="ltr">
      <Input
        inputRef={pin1Ref}
        className={classes.line}
        value={value[0] || ""}
        onChange={(e) => changeHandler(e.target.value, 0)}
        classes={{ input: classes.textAlign }}
        // onFocus={}
      />
      <Input
        inputRef={pin2Ref}
        className={classes.line}
        value={value[1] || ""}
        onChange={(e) => changeHandler(e.target.value, 1)}
        classes={{ input: classes.textAlign }}
        // onFocus={}
      />
      <Input
        inputRef={pin3Ref}
        className={classes.line}
        value={value[2] || ""}
        onChange={(e) => changeHandler(e.target.value, 2)}
        classes={{ input: classes.textAlign }}
        // onFocus={}
      />
      <Input
        inputRef={pin4Ref}
        className={classes.line}
        value={value[3] || ""}
        onChange={(e) => changeHandler(e.target.value, 3)}
        classes={{ input: classes.textAlign }}
        // onFocus={}
      />
      <Input
        inputRef={pin5Ref}
        className={classes.line}
        value={value[4] || ""}
        onChange={(e) => changeHandler(e.target.value, 4)}
        classes={{ input: classes.textAlign }}
        // onFocus={}
      />
    </div>
  );
};

export default CodeInput;
