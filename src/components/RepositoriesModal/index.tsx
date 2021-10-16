import Modal from "react-modal";
import { IRepository } from "../../App";
import closeImage from "../../assets/close.svg";
import { Repository } from "../Repository";

import { Container, List } from "./styles";

interface RepositoriesModalProps {
  isOpen: boolean;
  onRequestClose(): void;
  repositories: IRepository[];
  title: string;
}

export function RepositoriesModal({
  isOpen,
  onRequestClose,
  title,
  repositories,
}: RepositoriesModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImage} alt="Fechar modal" />
      </button>
      <Container>
        <h2>{title}</h2>

        <List>
          {repositories.map((repository: IRepository) => (
            <Repository repository={repository} />
          ))}
        </List>
      </Container>
    </Modal>
  );
}
