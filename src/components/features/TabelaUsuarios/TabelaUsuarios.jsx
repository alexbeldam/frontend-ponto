import useAuthStore from "../../../stores/auth";
import { useGetUsers } from "../../../hooks/usuarios";
import { TabelaContainer, Table, Acoes } from "./Styles";
import DeletarModal from "./DeletarModal";
import PermissaoModal from "./PermissaoModal";
import EditarModal from "./EditarModal";
import { useMediaQuery } from "../../../hooks/utils";

export default function TabelaUsuarios({ filters }) {
  const usuario = useAuthStore((state) => state.usuario);
  const { data, isLoading } = useGetUsers({});
  const isLandscape = useMediaQuery("(orientation: landscape)");

  const removerDiacriticos = (texto) =>
    texto
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

  const usuariosFiltrados = data?.usuarios
    ?.filter((u) => u._id !== usuario._id)
    ?.filter((u) => {
      const campo = filters.mode === "role" ? u.cargo : u.nome;
      return removerDiacriticos(campo).includes(removerDiacriticos(filters.text));
    })
    ?.filter((u) => {
      if (filters.access === "all") return true;
      const permissao = u.permissao ?? false;
      return String(permissao) === filters.access;
    })
    ?.sort((a, b) => {
      let valA, valB;

      if (filters.sortBy === "access") {
        valA = a.permissao ? 1 : 0;
        valB = b.permissao ? 1 : 0;
      } else {
        const campoA = filters.sortBy === "role" ? a.cargo : a.nome;
        const campoB = filters.sortBy === "role" ? b.cargo : b.nome;

        valA = removerDiacriticos(String(campoA)).toLowerCase();
        valB = removerDiacriticos(String(campoB)).toLowerCase();
      }

      if (valA < valB) return -1 * filters.order;
      if (valA > valB) return 1 * filters.order;
      return 0;
    });

  return (
    <TabelaContainer>
      <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Cargo</th>
            {isLandscape && <th>Acesso</th>}
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan={isLandscape ? 4 : 3}>Carregando...</td>
            </tr>
          ) : usuariosFiltrados?.length ? (
            usuariosFiltrados.map((u) => (
              <tr key={u._id}>
                <td>{u.nome}</td>
                <td>{u.cargo}</td>
                {isLandscape && <td>{u.permissao ? "Admin" : "Comum"}</td>}
                <td>
                  <Acoes>
                    <EditarModal id={u._id} nome={u.nome} cargo={u.cargo} />
                    <PermissaoModal id={u._id} permissao={u.permissao} />
                    <DeletarModal user={u._id} />
                  </Acoes>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={isLandscape ? 4 : 3}>Nenhum usuário encontrado</td>
            </tr>
          )}
        </tbody>
      </Table>
    </TabelaContainer>
  );
}
