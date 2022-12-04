import { baseurl } from "./categories"; 

const getOrders = async()=>{
  try {
    const data =  await fetch(`${baseurl}orders`);
    const dataClean = data.json()
    return dataClean;
  
  } catch (error) {
    console.log(error);
  }
}

export default getOrders;