import { SalesByGenre } from './utils/types';

export const buildSalesByGenre = (sales: SalesByGenre[]) => {
  const labels = sales.map((sale) => sale.gender);
  const series = sales.map((sale) => sale.sum);

  return {
    labels,
    series
  };
};
