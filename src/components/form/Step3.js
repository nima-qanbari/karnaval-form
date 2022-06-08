import React, { useState } from "react";

import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  field: {
    borderRadius: "30px",
    margin: "10px 0",
  },

  btn: {
    width: "340px",
    margin: "18px 0",
    padding: "15px 20px",
  },
}));

const Step3 = () => {
  const [data, setData] = useState({
    name: "",
    lastName: "",
  });

  const classes = useStyles();

  const onchangeHandler = (e) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };

  const clickHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form className={classes.container} onSubmit={clickHandler}>
        <TextField
          name="name"
          autoFocus
          value={data.name}
          onChange={onchangeHandler}
          variant="outlined"
          label="نام"
          type="text"
          className={classes.field}
        />
        <TextField
          name="lastName"
          value={data.lastName}
          onChange={onchangeHandler}
          variant="outlined"
          label="نام خانوادگی"
          type="text"
          className={classes.field}
        />
        <Button
          type="submit"
          className={classes.btn}
          color="primary"
          variant="contained"
        >
          ثبت نام
        </Button>
      </form>
    </div>
  );
};

export default Step3;
