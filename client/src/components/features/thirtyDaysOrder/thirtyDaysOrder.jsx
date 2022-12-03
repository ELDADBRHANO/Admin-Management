import React from 'react'
import { useContext } from 'react'
import { ordersContext } from '../../../context/orders'
import './thirtyDaysOrders.css'
function ThirtyDaysOrder() {
  const {orders, setOrders}= useContext(ordersContext);
  const ordersLength = orders.length
  return (
    <div className='days' >
      <div id='ordersDays'>
            <h2>{ordersLength}</h2>
      </div>
    </div>
  )
}

export default ThirtyDaysOrder;
