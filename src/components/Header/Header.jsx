import { StyledHeader, Menu, StyledLink, ClickableLogo } from "./Styles";
import { Dropdown } from "../";
import useAuthStore from "../../stores/auth";

export default function Header({ full = true }) {
  const usuario = useAuthStore((state) => state.usuario);

  return (
    <StyledHeader>
      {full ? (
        <ClickableLogo to='/'>
          <img src='/logo.svg' alt='Logo CPE' />
        </ClickableLogo>
      ) : (
        <img src='/logo.svg' alt='Logo CPE' />
      )}

      <Menu hidden={!full}>
        <StyledLink to='/' className={({ isActive }) => (isActive ? "active" : "")}>
          HOME
        </StyledLink>
        <StyledLink to='/perfil' className={({ isActive }) => (isActive ? "active" : "")}>
          PERFIL
        </StyledLink>
        {usuario?.permissao && (
          <StyledLink to='/usuarios' className={({ isActive }) => (isActive ? "active" : "")}>
            USUÁRIOS
          </StyledLink>
        )}
      </Menu>

      <Dropdown hidden={!full} usuario={usuario} />
    </StyledHeader>
  );
}
