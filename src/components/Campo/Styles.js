import styled from "styled-components";
import { colors } from "../../styles/styleVariables";

export const Container = styled.div`
  width: 100%;
  font-size: clamp(1rem, 1.5vw, 1.2rem);

  input {
    border: none;
    outline: none;
    height: clamp(2.4rem, 2.8vw, 2.8rem);
    width: clamp(260px, 50vw, 460px);
    border-radius: 25px;
    padding: 0 1.2rem;
    font-size: inherit;
  }

  p {
    color: ${colors.red};
    margin-bottom: 1rem;
    font-weight: 500;
  }
`;
