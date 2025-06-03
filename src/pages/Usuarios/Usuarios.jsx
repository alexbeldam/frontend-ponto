import { Container } from "./Styles";
import { useState } from "react";
import { SearchWithFilters, TabelaUsuarios } from "../../components";

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
      <SearchWithFilters
        filters={filtros}
        setFilters={setFiltros}
        defaultFilters={defaultFilters}
      />
      <TabelaUsuarios filters={filtros} />
    </Container>
  );
}
