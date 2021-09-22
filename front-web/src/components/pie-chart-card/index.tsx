import ReactApexChart from 'react-apexcharts';
import { buildPieChartConfig } from './helpers';
import './styles.css';

type Props = {
  labels?: string[];
  name: string;
  series?: number[];
};

const PieChartCard = ({ labels = [], name, series = [] }: Props) => {
  return (
    <header className="pie-chart-card-container base-card">
      <div className="pie-chart-card-title-container">
        <h1 className="total-sale-value">R$ 746.484,00</h1>
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
