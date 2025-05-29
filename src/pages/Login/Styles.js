import styled from "styled-components";

export const Main = styled.main`
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;

  h1 {
    font-size: clamp(2.4rem, 5vw, 3.5rem);
    font-weight: 700;
    margin-bottom: 1.5rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
  max-width: 500px;
  padding: 0 1rem;
`;
