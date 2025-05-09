import { StyledHeader, StyledLink } from "./Styles";

export default function Header({ full = true }) {
  return (
    <StyledHeader>
      <img src='/src/assets/logo.svg' alt='Logo CPE' />

      <nav hidden={!full}>
        <StyledLink to='/' className={({ isActive }) => (isActive ? "active" : "")}>
          HOME
        </StyledLink>
        <StyledLink to='/perfil' className={({ isActive }) => (isActive ? "active" : "")}>
          PERFIL
        </StyledLink>
        <StyledLink to='/usuarios' className={({ isActive }) => (isActive ? "active" : "")}>
          USUÁRIOS
        </StyledLink>
      </nav>
    </StyledHeader>
  );
}
