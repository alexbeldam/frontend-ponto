import { Container } from "./Styles";
import Noticias from "./Noticias";
import Sessoes from "./Sessoes";

export default function Home() {
  return (
    <Container>
      <Noticias />
      <Sessoes />
    </Container>
  );
}
