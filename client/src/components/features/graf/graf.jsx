import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Colors
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
  Colors,
  Title,
  Tooltip,
  Legend
);

function Graf() {
  const { orders, setOrders } = useContext(ordersContext);
  if (orders === "undefined" || {} || [])  console.log("un");;
  const [chartData, setCharData] = useState({
    datasets: [],
  });
  
  const [chartOptions, setChartOptions] = useState({});
  
  
  useEffect(() => {
      
      setCharData({
        labels: orders?.map((item) => item?.ETD),
        datasets: [
          {
            type: "line",
            tension:0.4,
            label: "Reservations within the last 7 days",
            data:orders.map((item) => item?.productsNumbers),
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
  }, [orders]);
  
  if( !orders) return console.log("orders un");
  return (
    <Container className="d-flex justify-content-center" id="cont" fluid>
      <div className="chart-container">
        <Bar id="chart" height={60} data={chartData} options={chartOptions} />
      </div>
    </Container>
  );
}

export default Graf;
