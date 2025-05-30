import { Modal, Botao } from "../../components";
import { useState } from "react";
import { useUpdateUser } from "../../hooks/usuarios";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import { FiKey } from "react-icons/fi";
import { EditButton } from "./Styles";

export default function PermissaoModal({ id, permissao }) {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();

  const { mutate: putUser, isPending } = useUpdateUser({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["usuarios"] });
      handleCancel();
      toast.success("Atualizado com sucesso");
    },
    onError: (err) => {
      const { data } = err.response;

      if (err.status !== 403) toast.error(data.message);
    },
  });

  function handleOk() {
    if (id)
      putUser({
        id,
        dados: {
          permissao: !permissao,
        },
      });
  }

  function showModal() {
    setOpen(true);
  }

  function handleCancel() {
    setOpen(false);
  }

  return (
    <div>
      <EditButton onClick={showModal}>
        <FiKey />
      </EditButton>
      <Modal
        title={permissao ? "Remover Acesso" : "Conceder Acesso"}
        open={open}
        onCancel={handleCancel}
        footer={<Botao onClick={handleOk}>CONFIRMAR</Botao>}
      >
        <p>
          {permissao
            ? "Tem certeza que deseja remover acesso de administrador?"
            : "Tem certeza que deseja conceder acesso de administrador?"}
        </p>
      </Modal>
    </div>
  );
}
