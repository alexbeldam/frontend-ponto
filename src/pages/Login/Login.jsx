import { Main, Form, StyledLink } from "./Styles";
import { Senha } from "../../components";

export default function Login() {
  return (
    <Main>
      <h1>LOGIN</h1>
      <Form autoComplete='on'>
        <input type='email' placeholder='E-mail' name='email' autoComplete='email' />
        <Senha placeholder='Senha' name='pwd' autoComplete='current-password'></Senha>
        <div id='tail'>
          <p>
            Não tem login? Faça seu cadastro <StyledLink to='../cadastro'>aqui.</StyledLink>
          </p>
          <button id='submit'>ENTRAR</button>
        </div>
      </Form>
    </Main>
  );
}
