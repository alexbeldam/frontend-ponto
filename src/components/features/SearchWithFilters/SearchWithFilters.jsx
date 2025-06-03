import { SearchBar, Lupa, XisButton, Container } from "./Styles";
import { FiX } from "react-icons/fi";
import Filtro from "./Filtro";

export default function SearchWithFilters(props) {
  const { filters, setFilters } = props;

  const handleTextoChange = (e) => {
    setFilters((prev) => ({ ...prev, text: e.target.value }));
  };

  return (
    <Container>
      <div>
        <Lupa />
        <SearchBar
          type='text'
          placeholder={`Pesquisar usuários por ${filters.mode === "role" ? "cargo" : "nome"}...`}
          value={filters.text}
          onChange={handleTextoChange}
        />
        {filters.text !== "" && (
          <XisButton onClick={() => setFilters((prev) => ({ ...prev, text: "" }))}>
            <FiX />
          </XisButton>
        )}
      </div>
      <Filtro {...props} />
    </Container>
  );
}
