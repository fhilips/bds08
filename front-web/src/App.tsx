import { useEffect, useMemo, useState } from 'react';
import './App.css';
import Filter from './components/filter';
import Header from './components/header';
import PieChartCard from './components/pie-chart-card';
import { buildSalesByGenre } from './helpers';
import { sumSalesByDate } from './utils/formatters';
import { buildFilterParams, makeRequest } from './utils/request';
import { FilterData, PieChartConfig, SalesByGenre } from './utils/types';

function App() {
  const [filterData, setFilterData] = useState<FilterData>();
  const [salesByGenre, setSalesByGenre] = useState<PieChartConfig>();
  const [totalSum, setTotalSum] = useState(0);

  const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  useEffect(() => {
    makeRequest
      .get<SalesByGenre[]>('/sales/by-gender', { params })
      .then((response) => {
        console.log(response.data);
        const newSalesByGenre = buildSalesByGenre(response.data);
        setSalesByGenre(newSalesByGenre);
        const newTotalSum = sumSalesByDate(response.data);
        setTotalSum(newTotalSum);
      })
      .catch(() => {
        console.error('Error to fetch sales by genre');
      });
  }, [params]);

  const onFilterChange = (filter: FilterData) => {
    setFilterData(filter);
  };

  return (
    <div>
      <Header />
      <Filter onFilterChange={onFilterChange} />
      <PieChartCard
        name=""
        labels={salesByGenre?.labels}
        series={salesByGenre?.series}
        totalSum={totalSum}
      />
    </div>
  );
}

export default App;
