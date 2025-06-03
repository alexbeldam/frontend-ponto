import styled from "styled-components";
import { colors, breakpoints } from "../../../styles/styleVariables";

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

export const ModalContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 10%;
  margin-bottom: 20px;
`;

export const DeleteButton = styled.button`
  all: unset;
  cursor: pointer;
  font-size: 4rem;
  color: ${colors.grey.veryLight};
  transition: transform 0.2s ease, color 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 3rem;
  }

  @media (max-width: ${breakpoints.smallTablet}) {
    font-size: 2.5rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 2rem;
  }

  @media (max-width: ${breakpoints.smallDevice}) {
    font-size: 1.6rem;
  }

  @media (max-width: ${breakpoints.tinyDevice}) {
    font-size: 1.4rem;
  }
`;
