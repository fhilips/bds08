import ReactApexChart from 'react-apexcharts';
import { formatValue } from '../../utils/formatters';
import { buildPieChartConfig } from './helpers';
import './styles.css';

type Props = {
  labels?: string[];
  name: string;
  series?: number[];
  totalSum: number;
};

const PieChartCard = ({ labels = [], name, series = [], totalSum }: Props) => {
  return (
    <header className="pie-chart-card-container base-card">
      <div className="pie-chart-card-title-container">
        <h1 className="total-sale-value">{formatValue(totalSum)}</h1>
        <span className="total-sales-text">Total de vendas</span>
      </div>
      <ReactApexChart
        options={buildPieChartConfig(labels, name)}
        type="donut"
        width="400"
        height="400"
        series={series}
      />
    </header>
  );
};

export default PieChartCard;
