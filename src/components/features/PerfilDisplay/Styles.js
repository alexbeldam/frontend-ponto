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

export const ModalContent = styled.div`
  height: 100%;
  width: 100%;

  p {
    margin-bottom: 1rem;

    &:not(:first-child) {
      margin-top: 1rem;
    }
  }

  input {
    background-color: ${colors.white};
    border: 1px solid ${colors.black};
  }

  input,
  .pass {
    width: 100%;
  }

  input,
  .pass:not(:last-child) {
    margin-bottom: 1rem;
  }

  .pass input {
    margin-bottom: 0;
  }
`;

export const ModalContainer = styled.div`
  span:nth-child(2) {
    margin-left: 20px;
  }
`;
