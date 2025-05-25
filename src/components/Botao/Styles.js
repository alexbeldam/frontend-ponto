import styled from "styled-components";
import { colors, breakpoints } from "../../styles/styleVariables";

export const StyledBotao = styled.button`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  background: transparent;
  border: 2px solid ${({ color }) => (color ? colors[color] : colors.orange)};
  color: ${({ color }) => (color ? colors[color] : colors.orange)};
  padding: 2px 5px;
  border-radius: 6px;
  cursor: pointer;

  box-shadow: none;
  outline: none;

  font-family: inherit;
  font-size: 1.4rem;

  @media (max-width: ${breakpoints.smallTablet}) {
    font-size: 1.3rem;
    padding: 5px 10px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.2rem;
    padding: 4px 8px;
  }

  @media (max-width: ${breakpoints.smallDevice}) {
    font-size: 1.1rem;
    padding: 3px 7px;
  }

  @media (max-width: ${breakpoints.tinyDevice}) {
    font-size: 1rem;
    padding: 2px 5px;
  }
`;
