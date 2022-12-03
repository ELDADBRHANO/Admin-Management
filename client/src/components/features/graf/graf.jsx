import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { ordersContext } from "../../../context/orders";

import Container from 'react-bootstrap/Container';
import "./graf.css";
ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Graf() {
  const { orders, setOrders } = useContext(ordersContext);
  const data = orders.map((item) => item.ETD);
  const ordersNum = orders.map((item) => item.productsNumbers);
  if (orders === "undefined" || {} || []);
  console.log("orders:", orders);
  const [chartData, setCharData] = useState({
    labels: [],
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});
  

  useEffect(() => {
    setCharData({
      labels: data,
      datasets: [
        {
          type: "line",
          label: "Reservations within the last 7 days",
          data: ordersNum,
          borderColor: "rgb(53,162,235)",
          backgroundColor: "rgba(53,162,235,0.4)",
        },
      ],
    });

    setChartOptions({
      responsive: true,
      plugins: {
        length: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "dcx",
          },
        },
      },
    });
  }, []);
  if (!chartData === "undefined" || {} || [] || chartData.datasets === {});
  return (
    <Container>
      <div className="chart-container">
        <Bar height={40} data={chartData} options={chartOptions} />
      </div>
    </Container>
  );
}

export default Graf;
