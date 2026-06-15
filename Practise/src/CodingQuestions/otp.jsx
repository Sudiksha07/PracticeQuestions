import { useRef, useState } from "react";

const Otp = () => {
  const [otpNumber, setOtpNumber] = useState(
    new Array(6).fill("")
  );
  const inputRefs = useRef([]);


  const handleChangeOtp = (value, index) => {
    const newOtp = [...otpNumber];
    newOtp[index] = value;
    setOtpNumber(newOtp);

    if (value && index < otpNumber.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
  };

  const handleKeyDown = (e, index) => {
    if (
      e.key === "Backspace" &&
      otpNumber[index] === "" &&
      index > 0
    ) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <>
      {otpNumber.map((item, index) => (
        <input
          key={index}
          value={item}
          ref = {(ele)=> (inputRefs.current[index]=ele)}
          maxLength={1}
          onKeyDown={(e) =>
            handleKeyDown(e, index)
          }
          onChange={(e) =>
            handleChangeOtp(e.target.value, index)
          }
        />  
      ))}
    </>
  );
};

export default Otp;