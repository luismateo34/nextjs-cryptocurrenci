"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJs,
  CategoryScale,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJs.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
);

export interface Option {
  labels: string[];
  data: string[];
  label: string;
  borderColor?: string[];
  borderWidth?: number;
}
const dataOption = ({
  label,
  labels,
  data,
  borderColor,
  borderWidth,
}: Option) => {
  const dateoptions = {
    labels: labels,
    datasets: [
      {
        label: label,
        data: data,
        borderColor: borderColor,
        borderWidth: borderWidth,
      },
    ],
  };
  return dateoptions;
};

export const GraficLine = ({
  labels,
  data,
  label,
  borderWidth = 2,
  borderColor = ["rgba(233, 213, 2, 1)"],
}: Option) => {
  if (labels === null || data === null || label === undefined) return null;
  const date = dataOption({ borderColor, borderWidth, data, label, labels });
  return <Line data={date} className="w-full h-full" />;
};
