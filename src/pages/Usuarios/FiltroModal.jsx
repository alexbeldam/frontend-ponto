import { FiArrowUp, FiArrowDown } from "react-icons/fi";
import {
  FilterContainer,
  FilterButton,
  Select,
  OrdemButton,
  Label,
  SelectGroup,
  SelectRowGroup,
  FilterIcon,
  FilterOffIcon,
} from "./Styles";
import { Modal, Botao } from "../../components";
import { useState } from "react";

export default function FiltroModal({ filters, setFilters, defaultFilters }) {
  const [open, setOpen] = useState(false);

  const temFiltroAtivo =
    filters.mode !== defaultFilters.mode ||
    filters.sortBy !== defaultFilters.sortBy ||
    filters.order !== defaultFilters.order ||
    filters.access !== defaultFilters.access;

  const handleModoChange = (e) => {
    setFilters((prev) => ({ ...prev, mode: e.target.value }));
  };

  const handleOrdenarChange = (e) => {
    setFilters((prev) => ({ ...prev, sortBy: e.target.value }));
  };

  const handlePermissaoChange = (e) => {
    setFilters((prev) => ({ ...prev, access: e.target.value }));
  };

  const toggleOrdem = () => {
    setFilters((prev) => ({
      ...prev,
      order: prev.order === 1 ? -1 : 1,
    }));
  };

  function showModal() {
    setOpen(true);
  }

  function handleCancel() {
    setOpen(false);
  }

  function limparFiltros() {
    setFilters((prev) => ({
      ...prev,
      mode: defaultFilters.mode,
      sortBy: defaultFilters.sortBy,
      order: defaultFilters.order,
      access: defaultFilters.access,
      text: prev.text,
    }));
    handleCancel();
  }

  return (
    <FilterContainer>
      <FilterButton onClick={showModal}>
        {temFiltroAtivo ? <FilterOffIcon /> : <FilterIcon />}
      </FilterButton>

      <Modal
        title='Filtrar Usuários'
        open={open}
        onCancel={handleCancel}
        hasFooter={temFiltroAtivo}
        footer={
          <Botao color='red' onClick={limparFiltros}>
            LIMPAR
          </Botao>
        }
      >
        <SelectGroup>
          <Label htmlFor='mode'>Buscar por:</Label>
          <Select id='mode' value={filters.mode} onChange={handleModoChange}>
            <option value='name'>Nome</option>
            <option value='role'>Cargo</option>
          </Select>
        </SelectGroup>

        <SelectRowGroup>
          <Label htmlFor='sortBy'>Ordenar por:</Label>
          <Select id='sortBy' value={filters.sortBy} onChange={handleOrdenarChange}>
            <option value='name'>Nome</option>
            <option value='role'>Cargo</option>
            <option value='access'>Acesso</option>
          </Select>
          <OrdemButton onClick={toggleOrdem}>
            {filters.order === 1 ? <FiArrowUp /> : <FiArrowDown />}
          </OrdemButton>
        </SelectRowGroup>

        <SelectGroup>
          <Label htmlFor='access'>Filtrar por acesso:</Label>
          <Select id='access' value={filters.access} onChange={handlePermissaoChange}>
            <option value='all'>Todos</option>
            <option value='false'>Comum</option>
            <option value='true'>Admin</option>
          </Select>
        </SelectGroup>
      </Modal>
    </FilterContainer>
  );
}
