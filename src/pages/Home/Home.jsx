import { Container } from "./Styles";
import Noticias from "./Noticias";
import Sessoes from "./Sessoes";
import SessoesModal from "./SessoesModal";

export default function Home() {
  return (
    <Container>
      <Noticias />
      <SessoesModal />
      <Sessoes />
    </Container>
  );
}
