import { Display, ModalContainer } from "./Styles";
import EditarModal from "./EditarModal";
import SenhaModal from "./SenhaModal";
import useAuthStore from "../../../stores/auth";

export default function PerfilDisplay() {
  const { usuario, setUsuario } = useAuthStore((state) => state);

  return (
    <div>
      <Display>
        <table>
          <tbody>
            <tr>
              <td>Nome:</td>
              <td>{usuario?.nome || "Fulano"}</td>
            </tr>
            <tr>
              <td>E-mail:</td>
              <td>{usuario?.email || "meu@email.com"}</td>
            </tr>
            <tr>
              <td>Cargo:</td>
              <td>{usuario?.cargo || "Cargo"}</td>
            </tr>
          </tbody>
        </table>
      </Display>
      <ModalContainer>
        <EditarModal user={usuario} setUser={setUsuario} />
        <SenhaModal id={usuario?._id} />
      </ModalContainer>
    </div>
  );
}
