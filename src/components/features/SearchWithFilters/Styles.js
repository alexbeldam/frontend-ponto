import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { colors, breakpoints } from "../../../styles/styleVariables";
import { MdFilterAlt, MdFilterAltOff } from "react-icons/md";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 75%;
  gap: 1rem;
  margin: 20px auto 0 auto;
  font-size: clamp(1rem, 1.5vw, 1.2rem);

  div:first-child {
    position: relative;
    flex: 1;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 90%;
  }

  @media (max-width: ${breakpoints.smallDevice}) {
    width: 95%;
  }
`;

export const SearchBar = styled.input`
  border: none;
  outline: none;
  height: clamp(2.4rem, 2.8vw, 2.8rem);
  width: 100%;
  border-radius: 25px;
  padding: 0 1.2rem;
  padding-left: 36px;
`;

export const Lupa = styled(FiSearch)`
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  color: #666;
  pointer-events: none;
`;

export const XisButton = styled.button`
  all: unset;
  cursor: pointer;
  transition: transform 0.2s ease, color 0.2s ease;
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  color: #666;
  line-height: 0;
  padding: 2px;
  border-radius: 6px;

  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${colors.grey.veryLight};
  }
`;

export const FilterContainer = styled.div`
  color: ${colors.white};
  height: 100%;
`;

export const FilterButton = styled.button`
  all: unset;
  cursor: pointer;
  transition: transform 0.2s ease, color 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const FilterIcon = styled(MdFilterAlt)`
  height: clamp(2.18rem, 2.54vw, 2.54rem);
  width: auto;
`;

export const FilterOffIcon = styled(MdFilterAltOff)`
  height: clamp(2.18rem, 2.54vw, 2.54rem);
  width: auto;
`;

export const Select = styled.select`
  padding: 6px 10px;
  border-radius: 8px;
  border: 1px solid ${colors.grey.light};
  font-size: 1.4rem;
  background-color: ${colors.white};
  color: ${colors.black};
  width: 100%;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.2rem;
  }
`;

export const OrdemButton = styled.button`
  all: unset;
  margin-left: 10px;
  cursor: pointer;
  font-size: 1.6rem;
  color: ${colors.black};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  border-radius: 6px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${colors.grey.veryLight};
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.4rem;
  }
`;

export const Label = styled.label`
  margin-bottom: 0.4rem;
  font-weight: 500;
  color: ${colors.black};
  font-size: 1.3rem;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.2rem;
  }
`;

export const SelectGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1.2rem;

  &:last-of-type {
    margin-bottom: 2rem;
  }

  &.noMargin {
    margin-bottom: 0;
  }
`;

export const SelectRowGroup = styled(SelectGroup)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  ${Label} {
    margin-right: 1rem;
    white-space: nowrap;
  }

  ${Select} {
    flex: 1;
    width: fit-content;
  }

  ${OrdemButton} {
    margin-left: 10px;
    flex-shrink: 0;
  }
`;
