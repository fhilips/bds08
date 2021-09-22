import { SalesByGenre } from './types';

export const formatValue = (price: number) => {
  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL'
  }).format(price);
};

export const sumSalesByDate = (salesByGenre: SalesByGenre[] = []) => {
  return salesByGenre.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.sum;
  }, 0);
};
