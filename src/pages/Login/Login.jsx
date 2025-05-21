import { Main, Form, StyledLink } from "./Styles";
import { Campo, Senha } from "../../components";
import { useForm } from "react-hook-form";
import { useLogin } from "../../hooks/login";
import { useNavigate } from "react-router-dom";
import { loginValidationSchema } from "./utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";

export default function Login() {
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginValidationSchema) });

  const { mutate: postLogin, isPending } = useLogin({
    onSuccess: () => navigate("/"),
    onError: (err) => toast.error(err.message),
  });

  function response(data) {
    postLogin(data);
  }

  return (
    <Main>
      <h1>LOGIN</h1>
      <Form autoComplete='on' onSubmit={handleSubmit(response)}>
        <Campo
          type='email'
          placeholder='E-mail'
          {...register("email")}
          autoComplete='email'
          error={errors.email}
        />
        <Senha
          placeholder='Senha'
          {...register("senha")}
          autoComplete='current-password'
          error={errors.senha}
        />
        <div id='tail'>
          <p>
            Não tem login? Faça seu cadastro <StyledLink to='../cadastro'>aqui.</StyledLink>
          </p>
          <button id='btn'>ENTRAR</button>
        </div>
      </Form>
    </Main>
  );
}
