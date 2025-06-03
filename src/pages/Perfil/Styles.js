import styled from "styled-components";
import { colors, breakpoints } from "../../styles/styleVariables";

export const Container = styled.div`
  text-align: center;
  margin-top: 20px;
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
