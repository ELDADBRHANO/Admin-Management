

const getOrders = async()=>{
  try {
    const data =  await fetch('http://localhost:5000/orders/');
    const dataClean = data.json()
    return dataClean;
  
  } catch (error) {
    console.log(error);
  }
}

export default getOrders;