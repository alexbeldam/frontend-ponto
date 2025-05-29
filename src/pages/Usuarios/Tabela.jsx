import useAuthStore from "../../stores/auth";
import { useGetUsers } from "../../hooks/usuarios";
import { TabelaContainer, Table } from "./Styles";
import DeletarModal from "./DeletarModal";
import CargoModal from "./CargoModal";
import PermissaoModal from "./PermissaoModal";

export default function Tabela({ filter }) {
  const usuario = useAuthStore((state) => state.usuario);
  const { data, isLoading } = useGetUsers({
    onError: (err) => {
      if (err.status === 403) toast.error("Sessão expirada. Refaça o login.");
    },
  });

  const removerDiacriticos = (texto) =>
    texto
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

  const usuariosFiltrados = data?.usuarios?.filter(
    (u) => u._id !== usuario._id && removerDiacriticos(u.nome).includes(removerDiacriticos(filter))
  );

  return (
    <TabelaContainer>
      <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Cargo</th>
            <th>Acesso</th>
            <th aria-hidden />
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan={4}>Carregando...</td>
            </tr>
          ) : usuariosFiltrados?.length ? (
            usuariosFiltrados.map((u) => (
              <tr key={u._id}>
                <td>{u.nome}</td>
                <td>
                  <CargoModal id={u._id} cargo={u.cargo} />
                </td>
                <td>
                  <PermissaoModal id={u._id} permissao={u.permissao} />
                </td>
                <td>
                  <DeletarModal user={u._id} />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4}>Nenhum usuário encontrado</td>
            </tr>
          )}
        </tbody>
      </Table>
    </TabelaContainer>
  );
}
