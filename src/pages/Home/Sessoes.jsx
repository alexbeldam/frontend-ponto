import { SessoesContainer, Table, Membro, Tempo } from "./Styles";
import DeleteModal from "./DeleteModal";
import { useNow, useMediaQuery } from "../../hooks/utils";

export default function Sessoes({ user, data, isLoading }) {
  const now = useNow();
  const isLandscape = useMediaQuery("(orientation: landscape)");

  function duration(start) {
    const date = new Date(start);
    const diffMs = now - date;

    const hours = Math.trunc(diffMs / 3600000)
      .toString()
      .padStart(2, "0");
    const minutes = Math.trunc((diffMs % 3600000) / 60000)
      .toString()
      .padStart(2, "0");

    return `${hours}:${minutes}`;
  }

  return (
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
                    <Tempo>
                      {new Date(s.createdAt).toLocaleTimeString("pt-BR", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </Tempo>
                  </td>
                )}
                <td>
                  <Tempo>{duration(s.createdAt)}</Tempo>
                </td>
                <td>{user === s.id_usuario?._id && <DeleteModal user={user} />}</td>
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
  );
}
