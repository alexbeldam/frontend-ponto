import styled from "styled-components";
import { colors, breakpoints } from "../../styles/styleVariables";

export const Container = styled.div`
  position: relative;
  width: 44vw;

  button {
    cursor: pointer;
    font-size: 2rem;
    background: none;
    border: none;
    outline: none;
    position: absolute;
    padding-top: 5px;
    right: 1rem;
    top: calc(50%);
    transform: translateY(-50%);
    color: ${colors.grey};

    &:hover {
      color: ${colors.black};
    }

    &.lower {
      transform: translateY(calc(-50% + 1.3rem));

      @media (max-width: ${breakpoints.tablet}) {
        transform: translateY(calc(-50% + 1.25rem));
      }

      @media (max-width: ${breakpoints.mobile}) {
        transform: translateY(calc(-50% + 1.15rem));
      }

      @media (max-width: ${breakpoints.smallDevice}) {
        transform: translateY(calc(-50% + 1.05rem));
      }

      @media (max-width: ${breakpoints.tinyDevice}) {
        transform: translateY(calc(-50% + 1rem));
      }
    }

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 1.95rem;
    }

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 1.85rem;
    }

    @media (max-width: ${breakpoints.smallDevice}) {
      font-size: 1.75rem;
    }

    @media (max-width: ${breakpoints.tinyDevice}) {
      font-size: 1.7rem;
    }
  }
`;
