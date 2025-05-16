import { Main, Form, StyledLink } from "./Styles";
import { Senha } from "../../components";
import { useForm } from "react-hook-form";
import { useLogin } from "../../hooks/login";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({});

  const { mutate: postLogin, isPending } = useLogin({
    onSuccess: () => {
      navigate("/");
    },
  });

  function response(data) {
    postLogin(data);
  }

  return (
    <Main>
      <h1>LOGIN</h1>
      <Form autoComplete='on' onSubmit={handleSubmit(response)}>
        <input type='email' placeholder='E-mail' {...register("email")} autoComplete='email' />
        <Senha placeholder='Senha' {...register("senha")} autoComplete='current-password'></Senha>
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
