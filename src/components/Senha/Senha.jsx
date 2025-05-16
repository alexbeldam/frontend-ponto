import { PasswordWrapper } from "./Styles";
import React, { useState, forwardRef } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Password = forwardRef(function Password(props, ref) {
  const [visible, setVisible] = useState(false);
  const { name, placeholder, autoComplete, onChange, onBlur } = props;

  return (
    <PasswordWrapper>
      <input
        type={visible ? "text" : "password"}
        name={name}
        placeholder={placeholder}
        autoComplete={autoComplete}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
      />
      <button onClick={() => setVisible(!visible)} type='button'>
        {visible ? <FiEyeOff /> : <FiEye />}
      </button>
    </PasswordWrapper>
  );
});

export default Password;
