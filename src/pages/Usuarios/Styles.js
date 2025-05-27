import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { colors, breakpoints } from "../../styles/styleVariables";

export const Container = styled.div`
  margin-top: 20px;
  text-align: center;
`;

export const PesquisaContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  div {
    position: relative;
    width: 75%;
  }
`;

export const SearchBar = styled.input`
  width: 100%;
  padding: 5px 6px 5px 36px;
  border-radius: 20px;
  border: 1px solid #ccc;
  font-size: 14px;
`;

export const Lupa = styled(FiSearch)`
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  color: #666;
  pointer-events: none;
`;

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

  &:hover {
    transform: scale(1.1);
  }
`;

export const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  margin-left: 1rem;
`;

export const CargoContainer = styled.div`
  input {
    background-color: ${colors.grey.veryLight};
    width: 100%;
  }
`;
