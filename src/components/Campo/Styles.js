import styled from "styled-components";
import { colors, breakpoints } from "../../styles/styleVariables";

export const Container = styled.div`
  width: 100%;

  input {
    border: none;
    outline: none;
    height: 2.2vw;
    border-radius: 25px;
    width: 44vw;
    padding: 1rem;
  }

  p {
    color: ${colors.red};
    margin-bottom: 1rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1.25rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.15rem;
  }

  @media (max-width: ${breakpoints.smallDevice}) {
    font-size: 1.05rem;
  }

  @media (max-width: ${breakpoints.tinyDevice}) {
    font-size: 1rem;
  }
`;
