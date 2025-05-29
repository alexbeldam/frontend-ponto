import { SessoesContainer, Table, Membro, Tempo } from "./Styles";
import { FiTrash } from "react-icons/fi";
import { useDeleteSession } from "../../hooks/sessoes";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Botao, Modal } from "../../components/";

export default function Sessoes({ user, data, isLoading }) {
  const [now, setNow] = useState();
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();

  useEffect(() => {
    setNow(Date.now());

    const interval = setInterval(() => setNow(Date.now()), 5000);

    return () => clearInterval(interval);
  }, []);

  const { mutate: deleteSession, isPending } = useDeleteSession({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["sessoes"] });
    },
    onError: (err) => {
      const { data } = err.response;

      toast.error(err.status === 403 ? "Sessão expirada. Refaça o login." : data.message);
    },
  });

  function showModal() {
    setOpen(true);
  }

  function handleOk() {
    setOpen(false);

    if (user) deleteSession(user);
  }

  function handleCancel() {
    setOpen(false);
  }

  function duration(start) {
    const data = new Date(start);
    const diffMs = now - data;

    const hours = Math.trunc(diffMs / 3600000)
      .toString()
      .padStart(2, "0");
    const minutes = Math.trunc((diffMs % 3600000) / 60000)
      .toString()
      .padStart(2, "0");

    return `${hours}:${minutes}`;
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
                  <Tempo>{duration(s.createdAt)}</Tempo>
                </td>
                <td>
                  {user === s.id_usuario?._id && (
                    <button onClick={showModal}>
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
      <Modal
        title='Excluir Sessão'
        open={open}
        onCancel={handleCancel}
        footer={<Botao onClick={handleOk}>EXCLUIR</Botao>}
      >
        <p>Tem certeza que você deseja deslogar esse usuário?</p>
      </Modal>
    </SessoesContainer>
  );
}
