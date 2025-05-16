import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors, fonts, breakpoints } from "../../styles/styleVariables";

export const Main = styled.main`
  text-align: center;
  height: 100%;
  padding-top: 15px;
`;

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    margin-top: 15px;
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

  #tail {
    margin-top: 15px;
    color: ${colors.white};
  }

  #submit {
    cursor: pointer;
    font-size: 2rem;
    background: none;
    border: none;
    outline: none;
    margin-top: 15px;
    background-color: ${colors.yellow};
    font-weight: bold;
    border-radius: 10px;
    padding: 5px 15px;

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 1.5rem;
      padding: 5px 10px;
    }

    @media (max-width: ${breakpoints.smallDevice}) {
      font-size: 1.2rem;
      padding: 4px 8px;
    }
  }
`;

export const StyledLink = styled(Link)`
  color: ${colors.yellow};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
