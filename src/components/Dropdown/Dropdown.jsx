import { Container, ToggleButton, Nav, StyledLink } from "./Styles";
import { FiChevronDown } from "react-icons/fi";
import { useState } from "react";

export default function DropdownMenu({ hidden, usuario }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container hidden={hidden}>
      <ToggleButton onClick={() => setIsOpen((prev) => !prev)}>
        <FiChevronDown />
      </ToggleButton>

      <Nav open={isOpen}>
        <StyledLink to='/'>Home</StyledLink>
        <StyledLink to='/perfil'>Perfil</StyledLink>
        {usuario?.permissao && <StyledLink to='/usuarios'>Usuários</StyledLink>}
      </Nav>
    </Container>
  );
}
