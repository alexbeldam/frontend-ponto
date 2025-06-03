import styled from "styled-components";
import { breakpoints } from "../../../styles/styleVariables";

export const Container = styled.div`
  width: 90%;
  margin: 30px auto;

  .row {
    display: flex;
    width: 100%;
    height: 100%;
    max-height: 342px;
    align-items: center;
    justify-content: space-around;

    @media (max-width: ${breakpoints.tablet}) {
      flex-direction: column;
      max-height: none;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 95%;
  }
`;

export const Imagem = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  max-width: 608px;
  max-height: 342px;

  background-color: #000000;
  border-radius: 10px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    aspect-ratio: 16 / 9;
  }

  & + & {
    margin-left: 16px;
  }
`;
