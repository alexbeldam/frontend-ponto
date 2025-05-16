import React, { useState } from "react";
import { PasswordWrapper } from "./Styles";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function Password(props) {
  const [visible, setVisible] = useState(false);

  return (
    <PasswordWrapper>
      <input
        type={visible ? "text" : "password"}
        placeholder={props.placeholder}
        name={props.name}
        autoComplete={props.autoComplete}
      />
      <button onClick={() => setVisible(!visible)} type='button'>
        {visible ? <FiEyeOff /> : <FiEye />}
      </button>
    </PasswordWrapper>
  );
}
