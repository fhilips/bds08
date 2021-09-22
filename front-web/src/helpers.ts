import { Gender, SalesByGenre } from './utils/types';

export const buildSalesByGenre = (sales: SalesByGenre[]) => {
  const labels = sales.map((sale) => formatGender(sale.gender));
  const series = sales.map((sale) => sale.sum);

  return {
    labels,
    series
  };
};

const formatGender = (gender: Gender) => {
  const textByGender = {
    MALE: 'Masculino',
    FEMALE: 'Feminino',
    OTHER: 'Outros'
  };

  return textByGender[gender];
};
