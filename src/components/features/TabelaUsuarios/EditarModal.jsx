import { Modal, Botao, Campo } from "../..";
import { useState } from "react";
import { useUpdateUser } from "../../../hooks/usuarios";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { editValidationSchema } from "./utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { EditContainer, EditButton, ModalContent } from "./Styles";
import { FiEdit } from "react-icons/fi";

export default function EditarModal({ id, nome, cargo }) {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();

  const { mutate: putUser, isPending } = useUpdateUser({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["usuarios"] });
      handleCancel();
      reset();
      toast.success("Atualizado com sucesso");
    },
    onError: (err) => {
      const { data } = err.response;

      if (err.status !== 403) toast.error(data.message);
    },
  });

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(editValidationSchema),
    defaultValues: {
      cargo,
    },
  });

  function response(data) {
    if (data.cargo === cargo) {
      handleCancel();
      reset();
      return;
    }

    putUser({ id, dados: data });
  }

  function showModal() {
    setOpen(true);
  }

  function handleCancel() {
    setOpen(false);
  }

  return (
    <EditContainer>
      <EditButton onClick={showModal}>
        <FiEdit />
      </EditButton>

      <Modal
        title={`Editar cargo de ${nome}`}
        open={open}
        onCancel={handleCancel}
        footer={<Botao form='user'>SALVAR</Botao>}
      >
        <ModalContent>
          <form id='user' onSubmit={handleSubmit(response)}>
            <Campo
              type='text'
              placeholder='Novo Cargo'
              {...register("cargo")}
              error={errors.cargo}
            />
          </form>
        </ModalContent>
      </Modal>
    </EditContainer>
  );
}
