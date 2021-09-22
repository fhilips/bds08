import { useCallback, useEffect, useState } from 'react';
import Select from 'react-select';
import { makeRequest } from '../../utils/request';
import { FilterData, Store } from '../../utils/types';
import './styles.css';

type Props = {
  onFilterChange: (filter: FilterData) => void;
};

const Filter = ({ onFilterChange }: Props) => {
  const [stores, setStores] = useState<Store[]>([]);

  const getStores = useCallback(() => {
    makeRequest.get('/stores').then((response) => {
      setStores(response.data);
    });
  }, []);

  useEffect(() => {
    getStores();
  }, [getStores]);

  const handleChangeStore = (value?: Store) => {
    const selectedStore = value as Store;
    console.log(selectedStore);
    onFilterChange({ store: selectedStore });
  };
  return (
    <header className="filter-container base-card">
      <Select
        options={stores}
        classNamePrefix="store-select"
        isClearable
        placeholder="Selecione uma loja"
        getOptionLabel={(store) => store.name}
        getOptionValue={(store) => String(store.id)}
        onChange={(value) => handleChangeStore(value as Store)}
      />
    </header>
  );
};

export default Filter;
