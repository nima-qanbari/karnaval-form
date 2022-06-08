import { Button, TextField } from "@material-ui/core";
import React, {useState} from "react";

import { makeStyles } from "@material-ui/core/styles";

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

const regexNumber = /^(09|\+989|9)[0-9]{9}$/;
const number = /^[0-9]*$/;

const Step1 = ({ onSubmit, error: propErrors , loading}) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);

  const classes = useStyles();

  const onchangeHandler = (e) => {
    if (number.test(e.target.value)) {
      setValue(e.target.value);
    }
  };

  const clickHandler = (e) => {
    e.preventDefault();
    if (!regexNumber.test(value)) {
      setError("شماره موبایل نامعتبر است");
    } else {
      setError(null);
      onSubmit(value)
    }
  };
  return (
    <div>
      <form className={classes.container} onSubmit={clickHandler}>
        <TextField
          name="mobile"
          autoFocus
          error={Boolean(error) || Boolean(propErrors)}
          helperText={error || propErrors}
          value={value}
          onChange={onchangeHandler}
          variant="outlined"
          label="شماره موبایل را وارد کنید"
          type="text"
          className={classes.field}
        />
        <Button
          type="submit"
          className={classes.btn}
          color="primary"
          variant="contained"
          disabled={loading}
        >
          تایید
        </Button>
      </form>
    </div>
  );
};

export default Step1;
