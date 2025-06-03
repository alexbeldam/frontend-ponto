import { ModalContainer } from "./Styles";
import { useState } from "react";
import { Botao, Modal } from "../..";
import { useCreateSession } from "../../../hooks/sessoes";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";

export default function SessoesModal({ id, nome }) {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();

  const { mutate: postSession, isPending } = useCreateSession({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["sessoes"] });
      toast.success(`Bom trabalho, ${nome}!`);
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

    if (id) postSession({ id_usuario: id });
  }

  function handleCancel() {
    setOpen(false);
  }

  return (
    <ModalContainer>
      <Botao onClick={showModal} color='yellow'>
        Fazer login
      </Botao>
      <Modal
        title='Você deseja mesmo fazer login?'
        open={open}
        onCancel={handleCancel}
        footer={<Botao onClick={handleOk}>LOGIN</Botao>}
      >
        <p>Tem certeza que você deseja fazer esse login?</p>
      </Modal>
    </ModalContainer>
  );
}
