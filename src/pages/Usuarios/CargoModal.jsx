import { Modal, Botao } from "../../components";
import { useState } from "react";
import { useUpdateUser } from "../../hooks/usuarios";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import { Campo } from "../../components";
import { useForm } from "react-hook-form";
import { cargoValidationSchema } from "./utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { CargoContainer, EditButton, IconWrapper } from "./Styles";
import { FiEdit } from "react-icons/fi";

export default function CargoModal({ id, cargo }) {
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

      toast.error(err.status === 403 ? "Sessão expirada. Refaça o login." : data.message);
    },
  });

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(cargoValidationSchema) });

  function response(data) {
    putUser({ id, dados: data });
  }

  function showModal() {
    setOpen(true);
  }

  function handleCancel() {
    setOpen(false);
  }

  return (
    <CargoContainer>
      <EditButton onClick={showModal}>
        {cargo}
        <IconWrapper>
          <FiEdit />
        </IconWrapper>
      </EditButton>
      <Modal
        title='Editar Cargo'
        open={open}
        onCancel={handleCancel}
        footer={<Botao form='cargo'>SALVAR</Botao>}
      >
        <form id='cargo' onSubmit={handleSubmit(response)}>
          <Campo type='text' placeholder='Novo Cargo' {...register("cargo")} error={errors.cargo} />
        </form>
      </Modal>
    </CargoContainer>
  );
}
