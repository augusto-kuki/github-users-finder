import { Container, Content } from "./styles";
import logoImg from "../../assets/logo_white.png";
import { Form } from "../Form";
import { IGitHubUser } from "../../App";

interface HeaderProps {
  handleChangeUser(user: IGitHubUser): void;
}
export function Header({ handleChangeUser }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Github" />
        <Form handleChangeUser={handleChangeUser} />
      </Content>
    </Container>
  );
}
