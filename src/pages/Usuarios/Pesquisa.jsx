import { PesquisaContainer, SearchBar, Lupa, XisButton } from "./Styles";
import FiltroModal from "./FiltroModal";
import { FiX } from "react-icons/fi";

export default function Pesquisa({ filters, setFilters, defaultFilters }) {
  const handleTextoChange = (e) => {
    setFilters((prev) => ({ ...prev, text: e.target.value }));
  };

  return (
    <PesquisaContainer>
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
      <FiltroModal filters={filters} setFilters={setFilters} defaultFilters={defaultFilters} />
    </PesquisaContainer>
  );
}
