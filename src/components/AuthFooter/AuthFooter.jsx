import { Container, StyledLink } from "./Styles";

const content = {
  login: {
    textBeforeLink: "Não tem login? Faça seu cadastro",
    linkTo: "/cadastro",
    buttonText: "ENTRAR",
  },
  cadastro: {
    textBeforeLink: "Já tem uma conta? Faça login",
    linkTo: "/login",
    buttonText: "CRIAR CONTA",
  },
};

export default function AuthFooter({ mode = "login" }) {
  const footerContent = content[mode];

  return (
    <Container>
      <p>
        {footerContent.textBeforeLink} <StyledLink to={footerContent.linkTo}>aqui.</StyledLink>
      </p>
      <button>{footerContent.buttonText}</button>
    </Container>
  );
}
