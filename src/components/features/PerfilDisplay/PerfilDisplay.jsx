import { Display } from "./Styles";

export default function PerfilDisplay({ user }) {
  return (
    <Display>
      <table>
        <tbody>
          <tr>
            <td>Nome:</td>
            <td>{user?.nome || "Fulano"}</td>
          </tr>
          <tr>
            <td>E-mail:</td>
            <td>{user?.email || "meu@email.com"}</td>
          </tr>
          <tr>
            <td>Cargo:</td>
            <td>{user?.cargo || "Cargo"}</td>
          </tr>
        </tbody>
      </table>
    </Display>
  );
}
