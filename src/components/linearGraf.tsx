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
  Legend
);
const dataOption = (labels: string[], data: string[], label: string) => {
  const dateoptions = {
    labels: labels,
    datasets: [
      {
        label: label,
        data: data,
        borderColor: ["rgba(233, 213, 2, 1)"],
        borderWidth: 2,
      },
    ],
  };
  return dateoptions;
};

export const GraficLine = ({
  labels,
  data,
  label,
}: {
  labels: string[];
  data: string[];
  label: string;
}) => {
  if (labels === null || data === null || label === undefined) return null;
  const date = dataOption(labels, data, label);
  return <Line data={date} className="w-full h-full" />;
};
