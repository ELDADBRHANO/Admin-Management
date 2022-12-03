import React from 'react'
import OrdersTable from '../ordersTable/ordersTable'
import ThirtyDaysUsers from '../thirtDaysUsers/thirtyDaysUsers'
import ThirtyDaysOrder from '../thirtyDaysOrder/thirtyDaysOrder'
import './siteStates.css';
function SiteStates() {
  return (
    <div className='container-fluid states-container text-center mt-5'>
         <div>
         Users in the last <strong>30</strong> days
        <div className="ordersUsers">
          <ThirtyDaysUsers/>
        </div>
      </div>
      <div>
      Orders in the last <strong>30</strong> days
        <div className="ordersUsers">
          <ThirtyDaysOrder/>
        </div>
      </div>
      <div>
        <div id='tableOfOrders' className="tableOrders">
          <OrdersTable/>
        </div>
      </div>
    </div>
  )
}

export default SiteStates
