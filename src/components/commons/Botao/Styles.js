import styled from "styled-components";
import { colors } from "../../../styles/styleVariables";

export const StyledBotao = styled.button`
  appearance: none;
  background: transparent;
  border: 2px solid ${({ color }) => (color ? colors[color] : colors.orange)};
  color: ${({ color }) => (color ? colors[color] : colors.orange)};
  padding: clamp(4px, 0.5vw, 6px) clamp(10px, 2vw, 15px);
  border-radius: 6px;
  cursor: pointer;

  font-family: inherit;
  font-size: clamp(1.2rem, 2vw, 2rem);

  box-shadow: none;
  outline: none;

  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ color }) => (color ? colors[color] + "20" : colors.orange + "20")};
  }
`;
