import { Container } from "./Styles";
import { forwardRef } from "react";

const Campo = forwardRef(function Campo(props, ref) {
  const { error, ...rest } = props;

  return (
    <Container>
      {error && <p>{error.message}</p>}
      <input ref={ref} {...rest} />
    </Container>
  );
});

export default Campo;
