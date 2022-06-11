import React from "react";
import Form from "../pages/Form/Form";
import { onSubmit1, onSubmit2, onSubmit3 } from "../Utils/onSubmit";
import { useOnSuccess } from "../Hooks/useOnSuccess";

const ApiConnector = () => {
  const onSuccess = useOnSuccess()

  return (
    <Form
      onTimeOut={onSubmit1}
      onSubmit1={onSubmit1}
      onSubmit2={onSubmit2}
      onSubmit3={onSubmit3}
      onSuccess={onSuccess}
    />
  );
};

export default ApiConnector;
