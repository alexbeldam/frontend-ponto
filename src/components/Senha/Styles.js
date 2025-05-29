import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: clamp(260px, 50vw, 460px);

  button {
    cursor: pointer;
    font-size: clamp(1.8rem, 3.5vw, 2.2rem);
    background: none;
    border: none;
    outline: none;
    position: absolute;
    padding-top: 5px;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    transition: opacity 0.2s ease;
    opacity: 0.5;

    &:hover {
      opacity: 1;
    }

    &.lower {
      transform: translateY(calc(-50% + clamp(1rem, 2.5vw, 1.3rem)));
    }
  }
`;
