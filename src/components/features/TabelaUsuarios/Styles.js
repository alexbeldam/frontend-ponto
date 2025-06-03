import styled from "styled-components";
import { colors, breakpoints } from "../../../styles/styleVariables";

export const TabelaContainer = styled.div`
  margin: 20px auto;
  width: 80%;
  text-align: center;
  color: ${colors.white};

  thead,
  tr:not(:last-child) {
    border-bottom: 2px solid ${colors.white};
  }

  th {
    height: 60px;
  }

  td {
    height: 90px;
  }
`;

export const Table = styled.table`
  table-layout: fixed;
  font-size: 2rem;
  border-collapse: collapse;
  background-color: ${colors.black};
  width: 100%;

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
`;

export const DeleteButton = styled.button`
  all: unset;
  cursor: pointer;
  transition: transform 0.2s ease, color 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const EditButton = styled.button`
  all: unset;
  cursor: pointer;
  transition: transform 0.2s ease, color 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const EditContainer = styled.div`
  input {
    background-color: ${colors.grey.veryLight};
    width: 100%;
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
    width: 100%;
  }
`;

export const Acoes = styled.span`
  display: inline-flex;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
`;
