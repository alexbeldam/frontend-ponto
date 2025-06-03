import { Container, ModalContent } from "./Styles";
import { PerfilDisplay, Botao, Modal, Campo, Senha } from "../../components";
import useAuthStore from "../../stores/auth";
import { useUpdateUser } from "../../hooks/usuarios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateValidationSchema } from "./utils";

export default function Perfil() {
  const { usuario, setUsuario } = useAuthStore((state) => state);
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(updateValidationSchema) });

  const { mutateAsync: putUser, isPending } = useUpdateUser({
    onSuccess: () => {
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
    reset();

    const cleaned = Object.fromEntries(
      Object.entries(data).filter(([_, value]) =>
        value !== undefined && typeof value === "string" ? value.trim() !== "" : true
      )
    );

    if (Object.keys(cleaned).length !== 0) {
      const { updated } = await putUser({ id: usuario?._id, dados: cleaned });

      setUsuario(updated);
    }
  }

  function handleCancel() {
    setOpen(false);
  }

  return (
    <Container>
      <h1>Perfil</h1>
      <PerfilDisplay user={usuario} />
      <Botao onClick={showModal} color='yellow'>
        Editar
      </Botao>
      <Modal
        title={"Editar perfil"}
        open={open}
        onCancel={handleCancel}
        footer={<Botao form='update'>SALVAR</Botao>}
      >
        <ModalContent>
          <p>Deixe em branco para não alterar</p>

          <form id='update' onSubmit={handleSubmit(response)} autoComplete='on'>
            <Campo type='text' placeholder='Nome' {...register("nome")} error={errors.nome} />
            <Campo
              type='email'
              placeholder='E-mail'
              {...register("email")}
              error={errors.email}
              autoComplete='email'
            />
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
    </Container>
  );
}
