import axios from "axios";
import { useState } from "react";
import { IGitHubUser, IRepository } from "../../App";
import { Container } from "./styles";

interface FormProps {
  handleChangeUser(user: IGitHubUser): void;
}
export function Form({ handleChangeUser }: FormProps) {
  const [user, setUser] = useState("");

  async function handleFindUser() {
    if (!user) {
      alert("Ops, informe o usuário!");
      return;
    }

    try {
      const response = await axios.get<any>(
        `https://api.github.com/users/${user}`
      );

      if (response.data) {
        const {
          starred_url,
          repos_url,
          name,
          login,
          avatar_url,
          created_at,
          bio,
        } = response.data;

        let repositories: IRepository[] = [];
        let starredRepositories: IRepository[] = [];

        await axios
          .get<any>(`https://api.github.com/users/${user}/starred`)
          .then((response) => (starredRepositories = response.data));

        await axios
          .get<any>(`https://api.github.com/users/${user}/repos`)
          .then((response) => (repositories = response.data));

        handleChangeUser({
          avatarUrl: avatar_url,
          repositoriesUrl: repos_url,
          bio,
          name,
          login,
          starredRepositoriesUrl: starred_url,
          createdAt: created_at,
          repositories,
          starredRepositories,
        });
      }
    } catch (error) {
      alert("Ops, usuário não encontrado!");

      return;
    }
  }

  return (
    <Container>
      <h2>Busque repositórios de usuários do GitHub</h2>
      <input
        placeholder="Usuário"
        value={user}
        onChange={(event) => setUser(event.target.value)}
      />

      <button type="button" onClick={handleFindUser}>
        Buscar
      </button>
    </Container>
  );
}
