import styled from "styled-components";
import { breakpoints } from "../../styles/styleVariables";

export const Main = styled.main`
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
  gap: 25px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;

  input {
    border: none;
    outline: none;
    height: 2.2vw;
    border-radius: 25px;
    width: 44vw;
    padding: 15px;
    margin: 0;

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
  }
`;
