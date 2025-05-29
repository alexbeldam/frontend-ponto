import styled from "styled-components";
import { colors } from "../../styles/styleVariables";

export const Container = styled.div`
  width: 100%;
  font-size: clamp(1.4rem, 2.8vw, 1.8rem);

  input {
    border: none;
    outline: none;
    height: clamp(3rem, 4.5vw, 4rem);
    width: clamp(260px, 50vw, 460px);
    border-radius: 25px;
    padding: 0 1.2rem;
    font-size: inherit;
  }

  p {
    color: ${colors.red};
    margin-bottom: 1rem;
    font-size: clamp(1.2rem, 2.5vw, 1.6rem);
    font-weight: 500;
  }
`;
