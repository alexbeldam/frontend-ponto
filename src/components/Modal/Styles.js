import styled from "styled-components";
import { colors, breakpoints } from "../../styles/styleVariables";

export const Container = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  background-color: ${colors.white};
  color: ${colors.black};
  max-width: 500px;
  min-width: 20%;
  border-radius: 20px;
  overflow: hidden;
  text-align: center;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.2);

  @media (max-width: ${breakpoints.smallTablet}) {
    max-width: 450px;
    min-width: 30%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    max-width: 380px;
    min-width: 40%;
  }

  @media (max-width: ${breakpoints.smallDevice}) {
    max-width: 320px;
    min-width: 50%;
  }

  @media (max-width: ${breakpoints.tinyDevice}) {
    max-width: 90vw;
    min-width: auto;
    margin: 0 10px;
  }
`;

export const ModalHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 16px;
  padding-top: 35px;
`;

export const ModalTitle = styled.h2`
  font-weight: 600;
  font-size: 20px;
  color: ${colors.black};

  @media (max-width: ${breakpoints.smallTablet}) {
    font-size: 18px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 16px;
  }

  @media (max-width: ${breakpoints.smallDevice}) {
    font-size: 15px;
  }

  @media (max-width: ${breakpoints.tinyDevice}) {
    font-size: 14px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 6px;
  right: 6px;
  background: transparent;
  border: none;
  padding: 4px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  cursor: pointer;
  color: ${colors.grey.veryLight};
  transition: background-color 0.2s ease, color 0.2s ease;
  font-size: 25px;

  &:hover {
    background-color: ${colors.grey.veryLight};
    color: ${colors.black};
  }
`;

export const ModalContent = styled.div`
  padding: 20px;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px 20px;

  & > button + button {
    margin-left: 10px;
  }
`;
