import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors, fonts, breakpoints } from "../../styles/styleVariables";

export const Container = styled.section`
  display: none;
  position: relative;

  @media (orientation: portrait) {
    display: block;
    visibility: ${(props) => (props.hidden ? "hidden" : "visible")};
  }
`;

export const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5em;

  @media (max-width: ${breakpoints.smallTablet}) {
    font-size: 1.4em;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.3em;
  }

  @media (max-width: ${breakpoints.smallDevice}) {
    font-size: 1.2em;
  }

  @media (max-width: ${breakpoints.tinyDevice}) {
    font-size: 1.1em;
  }
`;

export const Nav = styled.nav`
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  top: 100%;
  right: 0;
  background: ${colors.grey.veryLight};
  padding: 0.5em;
  border-radius: 8px;
  z-index: 100;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${colors.black};
  font-family: ${fonts.System};
  cursor: pointer;
  padding: 0.3em 0;

  @media (max-width: ${breakpoints.smallTablet}) {
    font-size: 0.95em;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.9em;
  }

  @media (max-width: ${breakpoints.smallDevice}) {
    font-size: 0.85em;
  }

  @media (max-width: ${breakpoints.tinyDevice}) {
    font-size: 0.8em;
  }
`;
