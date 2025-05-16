import { Main, Form, StyledLink } from "./Styles";
import { Senha } from "../../components";
import { useForm } from "react-hook-form";
import { useCreateUser } from "../../hooks/usuarios";
import { useQueryClient } from "@tanstack/react-query";
import { usuarioValidationSchema } from "./utils";
import { zodResolver } from "@hookform/resolvers/zod";

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
      reset();
      queryClient.invalidateQueries({
        queryKey: ["usuarios"],
      });
    },
  });

  function response(data) {
    postUser(data);
  }

  return (
    <Main>
      <h1>CADASTRO</h1>
      <Form autoComplete='on' onSubmit={handleSubmit(response)}>
        <input type='text' placeholder='Nome' {...register("nome")} autoComplete='name' />
        <input type='email' placeholder='E-mail' {...register("email")} autoComplete='email' />
        <input type='text' placeholder='Cargo' {...register("cargo")} />
        <Senha placeholder='Senha' {...register("senha")} autoComplete='new-password' />
        <Senha
          placeholder='Repita sua senha'
          {...register("confirmar")}
          autoComplete='new-password'
        />
        <div id='tail'>
          <p>
            Já tem uma conta? Faça login <StyledLink to='../login'>aqui.</StyledLink>
          </p>
          <button id='btn'>CRIAR CONTA</button>
        </div>
      </Form>
    </Main>
  );
}
