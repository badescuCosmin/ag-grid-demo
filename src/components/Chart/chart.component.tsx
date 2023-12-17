import { AgChartsReact } from "ag-charts-react";
import { useChart } from "./chart.hook";

export const ChartExample = () => {
  const { options } = useChart();

  return <AgChartsReact options={options} />;
};
