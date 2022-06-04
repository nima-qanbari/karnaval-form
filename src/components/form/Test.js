import React, { useState } from "react";

const Test = () => {

    const [otp, setOtp] = useState(new Array(4).fill(""));

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;
        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
        //Focus next input
         if (element.nextSibling && element.value!=="") {
            element.nextSibling.focus();
        }
    };

    return (
        <div>
            {otp.map((data, index) => {
                return (
                    <input
                        className="otp-field"
                        type="text"
                        name="otp"
                        maxLength="1"
                        key={index}
                        value={data}
                        onChange={e => handleChange(e.target, index)}
                        onFocus={e => e.target.select()}
                    />
                );
            })}
        </div>
    );
};

export default Test;