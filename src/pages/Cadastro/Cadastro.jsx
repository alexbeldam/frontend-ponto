import { Main, Container, Form, StyledLink } from "./Styles";
import { Senha } from "../../components";

export default function Cadastro() {
  return (
    <Main>
      <h1>CADASTRO</h1>

      <Container>
        <Form autoComplete='on'>
          <input type='text' placeholder='Nome' name='name' autoComplete='name' />
          <input type='email' placeholder='E-mail' name='email' autoComplete='email' />
          <input type='text' placeholder='Cargo' name='role' />
          <Senha placeholder='Senha' name='pwd' autoComplete='new-password' />
          <Senha placeholder='Repita sua senha' name='confirm' autoComplete='new-password' />
          <div id='tail'>
            <p>
              Já tem uma conta? Faça login <StyledLink>aqui.</StyledLink>
            </p>
            <button id='submit'>CRIAR CONTA</button>
          </div>
        </Form>
      </Container>
    </Main>
  );
}
