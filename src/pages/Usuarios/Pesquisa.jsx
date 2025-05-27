import { PesquisaContainer, SearchBar, Lupa } from "./Styles";

export default function Pesquisa({ filter, setFilter }) {
  return (
    <PesquisaContainer>
      <div>
        <Lupa />
        <SearchBar
          type='text'
          placeholder='Pesquisar usuários...'
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
    </PesquisaContainer>
  );
}
