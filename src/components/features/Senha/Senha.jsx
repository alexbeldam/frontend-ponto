import { Container } from "./Styles";
import React, { useState, forwardRef } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Campo } from "../..";

const Senha = forwardRef(function Password(props, ref) {
  const [visible, setVisible] = useState(false);
  const { error, className, ...rest } = props;

  return (
    <Container className={className}>
      <Campo {...rest} ref={ref} type={visible ? "text" : "password"} error={error} />
      <button className={error ? "lower" : ""} onClick={() => setVisible(!visible)} type='button'>
        {visible ? <FiEyeOff /> : <FiEye />}
      </button>
    </Container>
  );
});

export default Senha;
