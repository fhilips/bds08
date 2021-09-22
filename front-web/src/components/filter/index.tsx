import './styles.css';

const Filter = () => {
  return (
    <header className="filter-container base-card">
      <select className="filter-input">
        <option value="">Selecione um gênero</option>
        <option value="MALE">Masculino</option>
        <option value="FEMALE">Feminino</option>
        <option value="OTHER">Outro</option>
      </select>
    </header>
  );
};

export default Filter;
