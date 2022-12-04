import { baseurl } from "./categories";

const getStore = async()=>{
  try {
    return await fetch(`${baseurl}store`).then(res=>res.json())
  
  } catch (error) {
    console.log(error);
  }

}

export default getStore;