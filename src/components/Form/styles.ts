import styled from "styled-components";

export const Container = styled.div`
  background: var(--background);

  padding: 2rem 2rem;

  border-radius: 10px;

  margin-top: 1rem;
  h2 {
    color: var(--text-title);
    font-size: 1.8rem;

    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;

    height: 4rem;

    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-subtitle);
    }
    & + input {
      margin-top: 1rem;
    }
  }

  button {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #ffffff;

    border-radius: 0.25rem;
    border: 0;

    font-size: 1rem;
    margin-top: 1.5rem;

    transition: filter 0.2s;

    font-weight: 600;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
