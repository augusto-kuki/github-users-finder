/* eslint-disable react/jsx-no-target-blank */
import { IRepository } from "../../App";
import { Container, Footer, Header } from "./styles";

interface RepositoryProps {
  repository: IRepository;
}

export function Repository({ repository }: RepositoryProps) {
  return (
    <Container>
      <Header>
        <strong>{repository.name}</strong>
        <p>{repository.description}</p>
        <a href={`${repository.html_url}`} target="_blank">
          Ver repositório
        </a>
      </Header>

      <Footer>
        <p>
          Criado em:{" "}
          {new Intl.DateTimeFormat("pt-BR").format(
            new Date(repository.created_at)
          )}
        </p>
        <p>
          Modificado em:{" "}
          {new Intl.DateTimeFormat("pt-BR").format(
            new Date(repository.updated_at)
          )}
        </p>
      </Footer>
    </Container>
  );
}
