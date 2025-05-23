import { Main, Form } from "./Styles";
import { Campo, Senha } from "../../components";
import { useForm } from "react-hook-form";
import { useCreateUser } from "../../hooks/usuarios";
import { useQueryClient } from "@tanstack/react-query";
import { usuarioValidationSchema } from "./utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { AuthFooter } from "../../components";

export default function Cadastro() {
  const queryClient = useQueryClient();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(usuarioValidationSchema) });

  const { mutate: postUser, isPending } = useCreateUser({
    onSuccess: () => {
      toast.success("Cadastrado com sucesso");
      reset();
      queryClient.invalidateQueries({
        queryKey: ["usuarios"],
      });
    },
    onError: (err) => {
      const { data } = err.response;

      toast.error(data.message);
    },
  });

  function response(data) {
    postUser(data);
  }

  return (
    <Main>
      <h1>CADASTRO</h1>
      <Form autoComplete='on' onSubmit={handleSubmit(response)}>
        <Campo
          type='text'
          placeholder='Nome'
          {...register("nome")}
          autoComplete='name'
          error={errors.nome}
        />
        <Campo
          type='email'
          placeholder='E-mail'
          {...register("email")}
          autoComplete='email'
          error={errors.email}
        />
        <Campo type='text' placeholder='Cargo' {...register("cargo")} error={errors.cargo} />
        <Senha
          placeholder='Senha'
          {...register("senha")}
          autoComplete='new-password'
          error={errors.senha}
        />
        <Senha
          placeholder='Repita sua senha'
          {...register("confirmar")}
          autoComplete='new-password'
          error={errors.confirmar}
        />
        <AuthFooter mode='cadastro' />
      </Form>
    </Main>
  );
}
