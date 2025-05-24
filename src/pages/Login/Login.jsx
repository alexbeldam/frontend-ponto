import { Main, Form } from "./Styles";
import { Campo, Senha } from "../../components";
import { useForm } from "react-hook-form";
import { useLogin } from "../../hooks/login";
import { useNavigate } from "react-router-dom";
import { loginValidationSchema } from "./utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { AuthFooter } from "../../components";
import useAuthStore from "../../stores/auth";

export default function Login() {
  const navigate = useNavigate();
  const setToken = useAuthStore((state) => state.setToken);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginValidationSchema) });

  const { mutateAsync: postLogin, isPending } = useLogin({
    onSuccess: () => {
      reset();
      navigate("/");
    },
    onError: (err) => {
      const { data } = err.response;

      toast.error(data.message);
    },
  });

  async function response(data) {
    const { token } = await postLogin(data);

    setToken(token);
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
        <AuthFooter />
      </Form>
    </Main>
  );
}
