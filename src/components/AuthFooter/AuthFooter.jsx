import { Container, StyledLink } from "./Styles";

export default function AuthFooter({ mode = "login" }) {
  const isLogin = mode === "login";

  const textBeforeLink = isLogin
    ? "Não tem login? Faça seu cadastro"
    : "Já tem uma conta? Faça login";

  const linkTo = isLogin ? "/cadastro" : "/login";
  const buttonText = isLogin ? "ENTRAR" : "CRIAR CONTA";

  return (
    <Container>
      <p>
        {textBeforeLink} <StyledLink to={linkTo}>aqui.</StyledLink>
      </p>
      <button>{buttonText}</button>
    </Container>
  );
}
