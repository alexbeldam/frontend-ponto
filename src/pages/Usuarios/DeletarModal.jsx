import { Modal, Botao } from "../../components";
import { useState } from "react";
import { useDeleteUser } from "../../hooks/usuarios";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import { FiTrash } from "react-icons/fi";
import { DeleteButton } from "./Styles";

export default function DeletarModal({ user }) {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();

  const { mutate: deleteUser, isPending } = useDeleteUser({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["usuarios"] });

      toast.success("Deletado com sucesso");
    },
    onError: (err) => {
      const { data } = err.response;

      toast.error(data.message);
    },
  });

  function showModal() {
    setOpen(true);
  }

  function handleOk() {
    setOpen(false);

    if (user) deleteUser(user);
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
        title='Excluir Usuário'
        open={open}
        onCancel={handleCancel}
        footer={<Botao onClick={handleOk}>EXCLUIR</Botao>}
      >
        <p>Tem certeza que deseja excluir esse usuário?</p>
      </Modal>
    </div>
  );
}
