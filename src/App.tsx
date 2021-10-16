import ReactModal from "react-modal";

import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { UserProfile } from "./components/UserProfile";
import axios from "axios";

ReactModal.setAppElement("#root");

export interface IGitHubUser {
  name: string;
  login: string;
  repositoriesUrl: string;
  starredRepositoriesUrl: string;
  bio: string;
  avatarUrl: string;
  createdAt: string;
  repositories: IRepository[];
  starredRepositories: IRepository[];
}

export interface IRepository {
  name: string;
  description: string;
  html_url: string;
  created_at: string;
  updated_at: string;
}

function App() {
  const query = new URLSearchParams(window.location.search);
  const [user, setUser] = useState<IGitHubUser>();
  const queryUser = query.get("user");
  useEffect(() => {
    async function loadUser() {
      if (queryUser) {
        try {
          const response = await axios.get<any>(
            `https://api.github.com/users/${queryUser}`
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
              .get<any>(`https://api.github.com/users/${queryUser}/starred`)
              .then((response) => (starredRepositories = response.data));

            await axios
              .get<any>(`https://api.github.com/users/${queryUser}/repos`)
              .then((response) => (repositories = response.data));

            setUser({
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
    }

    loadUser();
  }, [queryUser]);

  return (
    <>
      <GlobalStyle />
      <Header handleChangeUser={setUser} />
      {user && <UserProfile user={user} />}
    </>
  );
}

export default App;
