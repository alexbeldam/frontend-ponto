import { Container } from "./Styles";
import Noticias from "./Noticias";
import Sessoes from "./Sessoes";
import SessoesModal from "./SessoesModal";
import useAuthStore from "../../stores/auth";
import { useGetSessions } from "../../hooks/sessoes";
import { toast } from "react-toastify";

export default function Home() {
  const usuario = useAuthStore((state) => state.usuario);
  const { data, isLoading } = useGetSessions({});

  const hasActiveSession = data?.sessoes?.some((s) => s.id_usuario?._id === usuario?._id);

  return (
    <Container>
      <Noticias />
      {!hasActiveSession && <SessoesModal id={usuario?._id} nome={usuario?.nome} />}
      <Sessoes user={usuario._id} data={data} isLoading={isLoading} />
    </Container>
  );
}
