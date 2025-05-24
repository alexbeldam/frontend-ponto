import styled from "styled-components";

export const Container = styled.div`
  margin-top: 30px;
`;

export const NoticiasContainer = styled.div`
  width: 90%;
  margin: 0 auto;

  .row {
    display: flex;
    width: 100%;
    height: 100%;
    max-height: 342px;
    align-items: center;
    justify-content: space-around;
  }
`;

export const ImagemContainer = styled.div`
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
