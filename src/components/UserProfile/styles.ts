import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  margin-top: -10rem;
  margin-bottom: 5rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const UserPhoto = styled.div`
  img {
    height: 250px;
    width: 250px;

    border-radius: 50%;
  }

  margin-bottom: 1rem;
`;

export const UserName = styled.h2`
  color: var(--text-title);
`;
export const UserLogin = styled.h3`
  color: var(--text-subtitle);
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;

  width: 50%;
  margin-top: 1rem;

  align-items: center;
`;

export const Bio = styled.p`
  text-align: center;

  margin-bottom: 1rem;

  color: var(--black);
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;

  margin: 1rem;

  width: 100%;

  button {
    width: 100%;
    padding: 0 1.5rem;
    margin: 1rem;
    height: 3rem;

    background: var(--green);
    color: #ffffff;

    border-radius: 0.25rem;
    border: 0;

    font-size: 1rem;
    font-weight: 600;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
