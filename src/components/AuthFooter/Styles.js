import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../styles/styleVariables";

export const Container = styled.div`
  color: ${colors.white};
  font-size: clamp(1.2rem, 2vw, 2rem);

  button {
    cursor: pointer;
    font-size: clamp(1.2rem, 2vw, 2rem);
    background-color: ${colors.yellow};
    border: none;
    outline: none;
    font-weight: bold;
    border-radius: 10px;
    padding: clamp(4px, 0.8vw, 6px) clamp(10px, 2vw, 15px);
    margin-top: 20px;
    transition: background-color 0.2s ease, filter 0.2s ease;

    &:hover {
      filter: brightness(0.85);
    }
  }
`;

export const StyledLink = styled(Link)`
  color: ${colors.yellow};
  text-decoration: none;
  font-size: clamp(1.2rem, 2vw, 2rem);
  transition: background-color 0.2s ease, filter 0.2s ease;

  &:hover {
    text-decoration: underline;
    filter: brightness(0.85);
  }
`;
