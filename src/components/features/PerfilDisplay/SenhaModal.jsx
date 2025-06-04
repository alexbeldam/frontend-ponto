import { ModalContent } from "./Styles";
import { Botao, Modal, Senha } from "../..";
import { useUpdateUser } from "../../../hooks/usuarios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { passwordValidationSchema } from "./utils";

export default function SenhaModal({ id }) {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(passwordValidationSchema) });

  const { mutate: putUser, isPending } = useUpdateUser({
    onSuccess: () => {
      reset();
      toast.success(`Atualizado com sucesso`);
      queryClient.invalidateQueries({ queryKey: ["usuarios"] });
    },
    onError: (err) => {
      const { data } = err.response;

      if (err.status !== 403) toast.error(data.message);
    },
  });

  function showModal() {
    setOpen(true);
  }

  async function response(data) {
    handleCancel();

    putUser({ id: id, dados: data });
  }

  function handleCancel() {
    setOpen(false);
  }

  return (
    <span>
      <Botao onClick={showModal} color='red'>
        Alterar Senha
      </Botao>
      <Modal
        title={"Trocar senha"}
        open={open}
        onCancel={handleCancel}
        footer={<Botao form='update'>SALVAR</Botao>}
      >
        <ModalContent>
          <form id='update' onSubmit={handleSubmit(response)} autoComplete='on'>
            <Senha
              className='pass'
              placeholder='Nova senha'
              {...register("senha")}
              error={errors.senha}
              autoComplete='new-password'
            />
            <Senha
              className='pass'
              placeholder='Confirmar nova senha'
              {...register("confirmar")}
              error={errors.confirmar}
              autoComplete='new-password'
            />
          </form>
        </ModalContent>
      </Modal>
    </span>
  );
}
