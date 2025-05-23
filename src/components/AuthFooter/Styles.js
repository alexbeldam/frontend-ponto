import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors, breakpoints } from "../../styles/styleVariables";

export const Container = styled.div`
  color: ${colors.white};

  button {
    cursor: pointer;
    font-size: 2rem;
    background: none;
    border: none;
    outline: none;
    background-color: ${colors.yellow};
    font-weight: bold;
    border-radius: 10px;
    padding: 5px 15px;
    margin-top: 20px;

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
