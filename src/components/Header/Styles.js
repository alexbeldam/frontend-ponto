import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { colors, fonts, breakpoints } from "../../styles/styleVariables";

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

  &.minimal {
    justify-content: flex-start;
  }

  img {
    height: 87px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 26px;
    padding: 0 20px;
    img {
      height: 75px;
    }
  }

  @media (max-width: ${breakpoints.smallTablet}) {
    height: auto;
    padding: 10px 0;
    font-size: 24px;

    img {
      height: 65px;
      margin-bottom: 10px;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 22px;
    img {
      height: 60px;
    }
  }

  @media (max-width: ${breakpoints.smallDevice}) {
    font-size: 18px;
    img {
      height: 50px;
    }
  }

  @media (max-width: ${breakpoints.tinyDevice}) {
    font-size: 16px;
    img {
      height: 45px;
    }
  }

  @media (orientation: portrait) {
    justify-content: space-between;
  }
`;

export const ClickableLogo = styled(Link)`
  cursor: pointer;
`;

export const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  width: 70%;
  justify-content: space-evenly;
  font-family: ${fonts.System};

  @media (orientation: portrait) {
    display: none;
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${colors.black};
  font-family: ${fonts.System};
  cursor: pointer;

  &.active {
    text-decoration: underline;
  }

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
