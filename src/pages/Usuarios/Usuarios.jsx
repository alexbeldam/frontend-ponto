import { Container } from "./Styles";
import { useState } from "react";
import Pesquisa from "./Pesquisa";
import Tabela from "./Tabela";

export default function Usuarios() {
  const [filtro, setFiltro] = useState("");

  return (
    <Container>
      <h1>GERENCIAR USUARIOS</h1>
      <Pesquisa filter={filtro} setFilter={setFiltro} />
      <Tabela filter={filtro} />
    </Container>
  );
}
