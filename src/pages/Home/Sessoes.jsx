import { SessoesContainer, Table, Membro, Tempo } from "./Styles";
import { FiTrash } from "react-icons/fi";
import Duracao from "./Duracao";
import { useDeleteSession } from "../../hooks/sessoes";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";

export default function Sessoes({ user, data, isLoading }) {
  const queryClient = useQueryClient();

  const { mutate: deleteSession, isPending } = useDeleteSession({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["sessoes"] });
    },
    onError: (err) => {
      const { data } = err.response;

      toast.error(data.message);
    },
  });

  function handleDelete() {
    if (user) deleteSession(user);
  }

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
          {isLoading ? (
            <tr>
              <td colSpan={4}>Carregando...</td>
            </tr>
          ) : data?.sessoes?.length ? (
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
                  {user === s.id_usuario?._id && (
                    <button onClick={handleDelete}>
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
}
