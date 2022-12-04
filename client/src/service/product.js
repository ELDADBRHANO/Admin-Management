import { baseurl } from "./categories";

const getProducts = async()=>{
  try {
    return await fetch(`${baseurl}products`).then(res=>res.json())
  
  } catch (error) {
    console.log(error);
  }

}

export default getProducts;