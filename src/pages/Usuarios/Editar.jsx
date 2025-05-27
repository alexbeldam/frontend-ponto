import { EditButton, IconWrapper } from "./Styles";
import { FiEdit } from "react-icons/fi";

export default function Editar({ current, onClick, icon = <FiEdit /> }) {
  return (
    <EditButton onClick={onClick}>
      {current}
      <IconWrapper>{icon}</IconWrapper>
    </EditButton>
  );
}
