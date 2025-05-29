import { FiX } from "react-icons/fi";
import {
  Container,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  CloseButton,
  ModalContent,
  ModalFooter,
} from "./Styles";
import { Botao } from "../";

export default function Modal({ open, title, onOk, onCancel, hasFooter = true, footer, children }) {
  if (!open) return null;

  return (
    <Container>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>{title || "Título"}</ModalTitle>
          <CloseButton onClick={onCancel}>
            <FiX />
          </CloseButton>
        </ModalHeader>
        <ModalContent>{children}</ModalContent>

        {hasFooter && <ModalFooter>{footer ?? <Botao onClick={onOk}>Ok</Botao>}</ModalFooter>}
      </ModalContainer>
    </Container>
  );
}
