import { useGetSessions } from "../../hooks/sessoes";
import { SessoesContainer, Table, Membro, Tempo } from "./Styles";
import { FiTrash } from "react-icons/fi";
import useAuthStore from "../../stores/auth";
import Duracao from "./Duracao";

const Sessoes = () => {
  const usuario = useAuthStore((state) => state.usuario);
  const { data, isLoading } = useGetSessions({});

  if (isLoading)
    return (
      <SessoesContainer>
        <p>Carregando...</p>
      </SessoesContainer>
    );

  return (
    <SessoesContainer>
      <Table>
        <thead>
          <tr>
            <th>MEMBRO</th>
            <th>CHEGADA</th>
            <th>TEMPO</th>
            <th aria-hidden />
          </tr>
        </thead>
        <tbody>
          {data?.sessoes?.length ? (
            data.sessoes.map((s) => (
              <tr key={s._id}>
                <td>
                  <Membro>
                    <p>{s.id_usuario?.nome}</p>
                    <p>{s.id_usuario?.cargo}</p>
                  </Membro>
                </td>
                <td>
                  <Tempo>
                    {new Date(s.createdAt).toLocaleTimeString("pt-BR", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </Tempo>
                </td>
                <td>
                  <Duracao startTime={s.createdAt} />
                </td>
                <td>
                  {usuario?.nome === s.id_usuario?.nome && (
                    <button>
                      <FiTrash />
                    </button>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4}>Nenhuma sessão ativa</td>
            </tr>
          )}
        </tbody>
      </Table>
    </SessoesContainer>
  );
};

export default Sessoes;
