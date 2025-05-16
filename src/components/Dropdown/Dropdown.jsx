import { Container, ToggleButton, Nav, StyledLink } from "./Styles";
import { FiChevronDown } from "react-icons/fi";
import { useState } from "react";

export default function DropdownMenu(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container hidden={props.hidden}>
      <ToggleButton onClick={() => setIsOpen((prev) => !prev)}>
        <FiChevronDown />
      </ToggleButton>

      <Nav open={isOpen}>
        <StyledLink to='/'>Home</StyledLink>
        <StyledLink to='/perfil'>Perfil</StyledLink>
        <StyledLink to='/usuarios'>Usuários</StyledLink>
      </Nav>
    </Container>
  );
}
