import useAuthStore from "../../../stores/auth";
import { useGetSessions } from "../../../hooks/sessoes";
import { SessoesContainer, Table, Membro } from "./Styles";
import { useMediaQuery } from "../../../hooks/utils";
import DeleteModal from "./DeleteModal";
import SessoesModal from "./SessoesModal";
import Duration from "./Duration";
import { Tempo } from "../..";

export default function TabelaSessoes() {
  const { data, isLoading } = useGetSessions({});
  const usuario = useAuthStore((state) => state.usuario);
  const isLandscape = useMediaQuery("(orientation: landscape)");

  const hasActiveSession = data?.sessoes?.some((s) => s.id_usuario?._id === usuario?._id);

  return (
    <div>
      {!hasActiveSession && <SessoesModal id={usuario?._id} nome={usuario?.nome} />}
      <SessoesContainer>
        <Table>
          <thead>
            <tr>
              <th>MEMBRO</th>
              {isLandscape && <th>CHEGADA</th>}
              <th>TEMPO</th>
              <th aria-hidden />
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={isLandscape ? 4 : 3}>Carregando...</td>
              </tr>
            ) : data?.sessoes?.length ? (
              data.sessoes.map((s) => (
                <tr key={s._id}>
                  <td>
                    <Membro>
                      <p>{s.id_usuario?.nome}</p>
                      <p>{s.id_usuario?.cargo}</p>
                    </Membro>
                  </td>
                  {isLandscape && (
                    <td>
                      <Tempo hour={s.createdAt} />
                    </td>
                  )}
                  <td>
                    <Duration startTime={s.createdAt} />
                  </td>
                  <td>
                    {usuario?._id === s.id_usuario?._id && (
                      <DeleteModal id={usuario._id} nome={usuario.nome} />
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={isLandscape ? 4 : 3}>Nenhuma sessão ativa</td>
              </tr>
            )}
          </tbody>
        </Table>
      </SessoesContainer>
    </div>
  );
}
