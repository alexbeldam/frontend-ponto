import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { colors, fonts } from "../../styles/styleVariables";

export const StyledHeader = styled.header`
  position: relative;
  width: 100%;
  height: 109px;
  background-color: ${colors.yellow};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  color: ${colors.black};
  font-size: 30px;

  img {
    height: 87px;
  }
`;

export const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  width: 70%;
  justify-content: space-evenly;
  font-family: ${fonts.System};
  visibility: ${(props) => (props.hidden ? "hidden" : "visible")};
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${colors.black};
  font-family: ${fonts.System};
  cursor: pointer;

  &.active {
    text-decoration: underline;
  }
`;
