import { useState } from "react";
import { AgChartOptions } from "ag-charts-community";

export const useChart = () => {
  const [options] = useState<AgChartOptions>({
    theme: "ag-material",
    title: { text: "Ice Cream Sales and Avg Temp" },
    subtitle: { text: "Data from 2022" },
    data: [
      { month: "Jan", avgTemp: 2.3, iceCreamSales: 162000 },
      { month: "Mar", avgTemp: 6.3, iceCreamSales: 302000 },
      { month: "May", avgTemp: 16.2, iceCreamSales: 800000 },
      { month: "Jul", avgTemp: 22.8, iceCreamSales: 1254000 },
      { month: "Sep", avgTemp: 14.5, iceCreamSales: 950000 },
      { month: "Nov", avgTemp: 8.9, iceCreamSales: 200000 },
    ],
    series: [
      {
        type: "line",
        xKey: "month",
        yKey: "iceCreamSales",
        yName: "Ice Cream Sales",
        stroke: "blue",
        marker: {
          fill: "blue",
          fillOpacity: 1,
          strokeWidth: 0,
        },
        label: { color: "#fff", enabled: false },
      },
      {
        type: "line",
        xKey: "month",
        yKey: "avgTemp",
        stroke: "red",
        marker: { fill: "red" },
        label: { color: "#fff" },
      },
    ],
    axes: [
      {
        type: "category",
        position: "bottom",
      },
      {
        type: "number",
        position: "left",
        keys: ["iceCreamSales"],
      },
      {
        type: "number",
        position: "right",
        keys: ["avgTemp"],
        label: {
          formatter: (params) => {
            return params.value + " °C";
          },
        },
      },
    ],
    legend: {
      position: "right",
    },
  });

  return {
    options,
  };
};
