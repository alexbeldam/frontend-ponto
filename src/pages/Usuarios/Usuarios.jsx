import { Container } from "./Styles";
import { useState } from "react";
import Pesquisa from "./Pesquisa";
import Tabela from "./Tabela";

const defaultFilters = {
  text: "",
  mode: "name",
  access: "all",
  sortBy: "name",
  order: 1,
};

export default function Usuarios() {
  const [filtros, setFiltros] = useState(defaultFilters);

  return (
    <Container>
      <h1>GERENCIAR USUARIOS</h1>
      <Pesquisa filters={filtros} setFilters={setFiltros} defaultFilters={defaultFilters} />
      <Tabela filters={filtros} />
    </Container>
  );
}
