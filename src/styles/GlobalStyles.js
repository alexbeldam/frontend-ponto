import { createGlobalStyle } from "styled-components";
import { colors, fonts } from "./styleVariables";

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  font-family: ${fonts.UIStack};
  font-size: 1.4rem;

  background-color: ${colors.black};
  color: ${colors.yellow};
  
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}

html,
body,
#root {
  height: 100%;
}

html {
  scroll-behavior: smooth;
  @media(prefers-reduced-motion: reduce) {
    scroll-behavior: auto;
  }
}
`;

export default GlobalStyles;
