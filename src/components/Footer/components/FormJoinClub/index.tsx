import { ButtonJoinNewsLetter, Container, Input } from "./styles";

export default function FormJoinClub() {
  return (
    <Container>
      <strong>
        Junte-se ao nosso clube e receba nossas principais novidades 🎉
      </strong>

      <form>
        <Input placeholder="seuemail@exemplo.com" type="text" />
        <ButtonJoinNewsLetter type="button">Inscrever-se</ButtonJoinNewsLetter>
      </form>
    </Container>
  );
}
