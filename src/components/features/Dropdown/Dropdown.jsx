import { Container, ToggleButton, Nav, StyledLink } from "./Styles";
import { FiChevronDown } from "react-icons/fi";
import { useState } from "react";

export default function DropdownMenu({ access }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <ToggleButton onClick={() => setIsOpen((prev) => !prev)}>
        <FiChevronDown />
      </ToggleButton>

      {isOpen && (
        <Nav>
          <StyledLink to='/' onClick={() => setIsOpen(false)}>
            Home
          </StyledLink>
          <StyledLink to='/perfil' onClick={() => setIsOpen(false)}>
            Perfil
          </StyledLink>
          {access && (
            <StyledLink to='/usuarios' onClick={() => setIsOpen(false)}>
              Usuários
            </StyledLink>
          )}
          <StyledLink to='/logout' onClick={() => setIsOpen(false)}>
            Sair
          </StyledLink>
        </Nav>
      )}
    </Container>
  );
}
