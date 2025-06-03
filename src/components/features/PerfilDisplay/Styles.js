import styled from "styled-components";
import { colors, breakpoints } from "../../../styles/styleVariables";

export const Display = styled.div`
  background-color: ${colors.grey.cardBackground};
  border-radius: 20px;
  overflow: hidden;
  margin: 20px auto;
  width: fit-content;
  text-align: left;
  color: ${colors.yellow};

  table {
    font-size: 2rem;
    border-collapse: collapse;

    td {
      padding: 2rem;
    }

    @media (max-width: ${breakpoints.desktop}) {
      font-size: 1.8rem;
    }

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 1.6rem;
    }

    @media (max-width: ${breakpoints.smallTablet}) {
      font-size: 1.4rem;
    }

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 1.2rem;
    }

    @media (max-width: ${breakpoints.smallDevice}) {
      font-size: 1rem;
    }

    @media (max-width: ${breakpoints.tinyDevice}) {
      font-size: 0.9rem;
    }
  }
`;
