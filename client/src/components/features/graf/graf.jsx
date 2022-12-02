import React from 'react'
import {Chart as ChartJS,LinearScale, CategoryScale,BarElement,Title,Tooltip,Legend} from 'chart.js';
import {Bar} from 'react-chartjs-2';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { ordersContext } from '../../../context/orders';
ChartJS.register(
  LinearScale, CategoryScale,BarElement,Title,Tooltip,Legend
)
function Graf() {
  const {orders, setOrders}=useContext(ordersContext);
  const [chartData, setCharData]= useState({
    datasets:[],
    
  })
  
  const [chartOptions, setChartOptions] = useState({})
  
  useEffect(()=>{
    setCharData({
      labels: Array.from(orders).map(data=>data?.ETD),
      datasets:[
        {
          label:"Reservations within the last 7 days",
          data:Array.from(orders).map(data=>data?.price),
          borderColor:"rgb(53,162,235)",
          backgroundColor:"rgba(53,162,235,0.4)"
        }
      ]
    });
    
    setChartOptions({
      responsive:false,
      config:{
        type:"line"
      },
      plugins:{
        length:{
          legend:{
            position:"top"
          },
          title:{
            display:true,
            text:"dcx"
          }
        }
      }
    })
  },[])
  console.log(chartData);
  return (
    <div>
      <Bar width={1900} height={2000} data={chartData} options={chartOptions} />
    </div>
  )
}

export default Graf
