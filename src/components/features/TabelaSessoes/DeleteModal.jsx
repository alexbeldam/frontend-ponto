import { FiTrash } from "react-icons/fi";
import { useDeleteSession } from "../../../hooks/sessoes";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import { Botao, Modal } from "../..";
import { useState } from "react";
import { DeleteButton } from "./Styles";

export default function DeleteModal({ id, nome }) {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();

  const { mutate: deleteSession, isPending } = useDeleteSession({
    onSuccess: () => {
      toast.success(`Bom descanso, ${nome}!`);
      queryClient.invalidateQueries({ queryKey: ["sessoes"] });
    },
    onError: (err) => {
      const { data } = err.response;

      if (err.status !== 403) toast.error(data.message);
    },
  });

  function showModal() {
    setOpen(true);
  }

  function handleOk() {
    setOpen(false);

    if (id) deleteSession(id);
  }

  function handleCancel() {
    setOpen(false);
  }

  return (
    <div>
      <DeleteButton onClick={showModal}>
        <FiTrash />
      </DeleteButton>
      <Modal
        title='Excluir Sessão'
        open={open}
        onCancel={handleCancel}
        footer={<Botao onClick={handleOk}>EXCLUIR</Botao>}
      >
        <p>Tem certeza que você deseja deslogar esse usuário?</p>
      </Modal>
    </div>
  );
}
