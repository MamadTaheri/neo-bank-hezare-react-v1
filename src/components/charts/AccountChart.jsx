import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faMonths from "../../data/faMonths";
import AccountTurnover from "../../data/AccountTurnover";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      display: true,
        labels: {
          color: "#0d6dfdb0",
          font: {
            family: "IRANSansWeb" 
          }
        },
        tooltip: {
          bodyFont: {
            family: "IRANSansWeb" 
          },
          titleFont: {
            family: "IRANSansWeb" 
          }
        }

    },
    title: {
      display: true,
      text: "گردش حساب شما",
      color: "rgb(16, 97, 219)",
      font: {
        family: "IRANSansWeb",
      },
    },
  },
  tooltips: {
    backgroundColor: "#f5f5f5",
    titleFontColor: "#333333",
    bodyFontColor: "#666",
    bodySpacing: 4,
    xPadding: 12,
    mode: "nearest",
    intersect: 0,
    position: "nearest"
  },


};

const labels = faMonths;

export const data = {
  labels,
  datasets: [
    {
      label: "مانده حساب",
      data: AccountTurnover,
      borderColor: "rgb(39, 39, 39)",
      backgroundColor: "rgb(248, 0, 0)",
    },
  ],
};

const AccountChart = () => {
  return (
    <Line
      options={options}
      data={data}
    />
  );
};

export default AccountChart;
