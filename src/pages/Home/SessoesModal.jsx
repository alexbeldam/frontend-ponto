import { ModalContainer } from "./Styles";
import { useState } from "react";
import { Botao, Modal } from "../../components/";

export default function SessoesModal() {
  const [open, setOpen] = useState(false);

  function showModal() {
    setOpen(true);
  }

  function handleOk() {
    setOpen(false);
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
