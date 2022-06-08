import React from "react";

import FormHelperText from '@material-ui/core/FormHelperText';

const CodeInput2 = ({ value, onChange, error, helperText }) => {
  const valueArray = [...new Array(5)].map((_, idx) =>
    value[idx] ? value[idx] : ""
  );

  console.log(valueArray);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    onChange(
      [...valueArray.map((element, idx) => (idx === index ? element.value : element))].join(
        ""
      )
    );

    //Focus next input
    if (element.nextSibling && element.value !== "") {
      element.nextSibling.focus();
    }

    if (element.previousSibling && element.value === "") {
      element.previousSibling.focus();
    }
  };

  return (
    <div dir="ltr">
      {valueArray.map((data, index) => {
        return (
          <input
            style={{
              width: "20px",
              margin: "0 10px",
              border: "none",
              borderBottom: "1px solid #000",
              outline: "none",
              textAlign: "center",
            }}
            id={index}
            className="value-field"
            type="text"
            name="value"
            maxLength="1"
            key={index}
            value={data}
            onChange={(e) => handleChange(e.target, index)}
            onFocus={(e) => e.target.select()}
          />
        );
      })}
      {Boolean(helperText) ? <FormHelperText error={error}>
        {helperText}
      </FormHelperText> : null }
    </div>
  );
};

export default CodeInput2;
