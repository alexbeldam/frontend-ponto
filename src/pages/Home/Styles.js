import styled from "styled-components";
import { colors, breakpoints } from "../../styles/styleVariables";

export const Container = styled.div``;

export const NoticiasContainer = styled.div`
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

export const SessoesContainer = styled.div`
  text-align: center;
  width: 80%;
  border-radius: 20px;
  overflow: hidden;
  margin: 0 auto 20px auto;

  @media (max-width: ${breakpoints.mobile}) {
    width: 95%;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: ${colors.grey.cardBackground};
  table-layout: fixed;
  font-size: 2rem;

  thead {
    background-color: ${colors.yellow};
    color: ${colors.black};
    font-weight: bold;
  }

  th {
    height: 60px;
  }

  tbody tr:not(:last-child) {
    border-bottom: 1px solid ${colors.grey.veryLight};
  }

  td {
    height: 90px;
  }

  button {
    all: unset;
    cursor: pointer;
    font-size: 4rem;
    color: ${colors.grey.veryLight};
    transition: transform 0.2s ease, color 0.2s ease;

    &:hover {
      transform: scale(1.1);
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 1.8rem;
    button {
      font-size: 3.5rem;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1.6rem;
    button {
      font-size: 3rem;
    }
  }

  @media (max-width: ${breakpoints.smallTablet}) {
    font-size: 1.4rem;
    button {
      font-size: 2.5rem;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.2rem;
    button {
      font-size: 2rem;
    }
  }

  @media (max-width: ${breakpoints.smallDevice}) {
    font-size: 1rem;
    button {
      font-size: 1.6rem;
    }
  }

  @media (max-width: ${breakpoints.tinyDevice}) {
    font-size: 0.9rem;
    button {
      font-size: 1.4rem;
    }
  }
`;

export const Membro = styled.div`
  width: 100%;
  padding-left: 30px;
  text-align: left;

  p:first-child {
    color: ${colors.white};
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding-left: 10px;
    font-size: 1.2rem;
  }

  @media (max-width: ${breakpoints.smallDevice}) {
    padding-left: 8px;
    font-size: 1rem;
  }
`;

export const Tempo = styled.div`
  border-radius: 6px;
  border: 1px solid ${colors.yellow};
  width: fit-content;
  padding: 2px 5px;
  margin: 0 auto;
`;

export const ModalContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 10%;
  margin-bottom: 20px;
`;
