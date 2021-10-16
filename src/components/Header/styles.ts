import styled from "styled-components";

export const Container = styled.header`
  background: var(--black);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 2rem 12rem;

  display: flex;

  flex-direction: column;

  align-items: center;
  justify-content: center;

  img {
    width: 200px;
  }

  button {
    font-size: 1rem;
    color: #fff;

    background: var(--blue-light);

    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;

    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
