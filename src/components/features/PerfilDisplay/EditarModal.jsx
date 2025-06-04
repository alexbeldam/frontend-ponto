import { ModalContent } from "./Styles";
import { Botao, Modal, Campo } from "../..";
import { useUpdateUser } from "../../../hooks/usuarios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateValidationSchema } from "./utils";

export default function EditarModal({ user, setUser }) {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(updateValidationSchema),
    defaultValues: {
      nome: user?.nome,
      email: user?.email,
    },
  });

  const { mutateAsync: putUser, isPending } = useUpdateUser({
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

    if (data.nome === user?.nome && data.email === user?.email) return;

    const { updated } = await putUser({ id: user?._id, dados: data });

    setUser(updated);
  }

  function handleCancel() {
    setOpen(false);
  }

  return (
    <span>
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
          <form id='update' onSubmit={handleSubmit(response)} autoComplete='on'>
            <Campo type='text' placeholder='Nome' {...register("nome")} error={errors.nome} />
            <Campo
              type='email'
              placeholder='E-mail'
              {...register("email")}
              error={errors.email}
              autoComplete='email'
            />
          </form>
        </ModalContent>
      </Modal>
    </span>
  );
}
