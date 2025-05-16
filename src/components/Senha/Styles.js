import styled from "styled-components";
import { colors, breakpoints } from "../../styles/styleVariables";

export const PasswordWrapper = styled.div`
  position: relative;
  width: 100%;

  input {
    border: none;
    outline: none;
    height: 2.2vw;
    border-radius: 25px;
    width: 44vw;
    padding: 15px;

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

  button {
    cursor: pointer;
    font-size: 2rem;
    background: none;
    border: none;
    outline: none;
    padding-top: 15px;
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: ${colors.grey};

    &:hover {
      color: ${colors.black};
    }

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 1.95rem;
    }

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 1.85rem;
      right: 2rem;
    }

    @media (max-width: ${breakpoints.smallDevice}) {
      font-size: 1.75rem;
      right: 3rem;
    }

    @media (max-width: ${breakpoints.tinyDevice}) {
      font-size: 1.7rem;
    }
  }
`;
