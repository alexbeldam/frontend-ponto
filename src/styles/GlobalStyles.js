import { createGlobalStyle } from "styled-components";
import { colors, fonts, breakpoints } from "./styleVariables";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%; 
    scroll-behavior: smooth;

    @media (prefers-reduced-motion: reduce) {
      scroll-behavior: auto;
    }
  }

  body {
    font-family: ${fonts.UIStack};
    font-size: 1.4rem;
    background-color: ${colors.black};
    color: ${colors.yellow};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;

    @media (max-width: ${breakpoints.smallTablet}) {
      font-size: 1.3rem;
    }

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 1.2rem;
    }

    @media (max-width: ${breakpoints.smallDevice}) {
      font-size: 1.1rem;
    }

    @media (max-width: ${breakpoints.tinyDevice}) {
      font-size: 1rem;
    }
  }

  html, body, #root {
    height: 100%;
  }
`;

export default GlobalStyles;
