import { Container } from "./Styles";
import { forwardRef } from "react";

const Campo = forwardRef(function Password(props, ref) {
  const { type, name, placeholder, autoComplete, error, onChange, onBlur } = props;

  return (
    <Container>
      {error && <p>{error.message}</p>}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        autoComplete={autoComplete ?? "off"}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
      />
    </Container>
  );
});

export default Campo;
