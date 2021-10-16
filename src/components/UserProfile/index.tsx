import { useState } from "react";

import {
  Container,
  Header,
  UserLogin,
  UserName,
  UserPhoto,
  Profile,
  Bio,
  Buttons,
} from "./styles";
import { RepositoriesModal } from "../RepositoriesModal";
import { IGitHubUser } from "../../App";

interface UserProfileProps {
  user: IGitHubUser;
}

export function UserProfile({ user }: UserProfileProps) {
  const [isRepositoriesModalOpen, setIsRepositoriesModalOpen] = useState(false);
  const [isStarredRepositoriesOpen, setIsStarredRepositoriesOpen] =
    useState(false);

  function handleOpenRepositoriesModal() {
    setIsRepositoriesModalOpen(true);
  }
  function handleCloseRepositoriesModal() {
    setIsRepositoriesModalOpen(false);
  }

  function handleOpenStarredRepositoriesModal() {
    setIsStarredRepositoriesOpen(true);
  }
  function handleCloseStarredRepositoriesModal() {
    setIsStarredRepositoriesOpen(false);
  }
  return (
    <Container>
      <Header>
        <UserPhoto>
          <img src={user.avatarUrl} alt="Github" />
        </UserPhoto>

        <UserName>{user.name}</UserName>
        <UserLogin>{user.login}</UserLogin>
      </Header>
      <Profile>
        <Bio>{user.bio}</Bio>

        <Bio>
          Since:{" "}
          {new Intl.DateTimeFormat("pt-BR").format(new Date(user.createdAt))}
        </Bio>

        <Buttons>
          <button type="button" onClick={handleOpenRepositoriesModal}>
            Ver repositórios
          </button>
          <button type="button" onClick={handleOpenStarredRepositoriesModal}>
            Ver favoritos
          </button>
        </Buttons>
      </Profile>

      <RepositoriesModal
        isOpen={isRepositoriesModalOpen}
        onRequestClose={handleCloseRepositoriesModal}
        title="Repositórios"
        repositories={user.repositories}
      />

      <RepositoriesModal
        isOpen={isStarredRepositoriesOpen}
        onRequestClose={handleCloseStarredRepositoriesModal}
        title="Repositórios favoritados"
        repositories={user.starredRepositories}
      />
    </Container>
  );
}
