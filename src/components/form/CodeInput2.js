import React from "react";

const CodeInput2 = ({ value, setValue  }) => {

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setValue([...value.map((d, idx) => (idx === index ? element.value : d))]);
    //Focus next input
    if (element.nextSibling && element.value !== "") {
      element.nextSibling.focus();
    }

    if (element.previousSibling && element.value === "") {
        element.previousSibling.focus()
    }
  };

  return (
    <div dir="ltr">
      {value.map((data, index) => {
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
    </div>
  );
};

export default CodeInput2;
