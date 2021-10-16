import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  background-color: var(--shape);

  padding: 2rem;
  border-radius: 10px;

  margin-bottom: 1rem;

  display: block;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    color: var(--black);
    font-size: 1.8rem;

    margin-bottom: 1rem;
  }

  a {
    color: var(--blue);
  }

  p {
    color: var(--text-body);
  }
`;

export const Footer = styled.div`
  margin-top: 1rem;

  p {
    color: var(--text-body);
  }
`;
