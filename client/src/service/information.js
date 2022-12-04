import { baseurl } from "./categories";

const getInformation = async()=>{
  try {
    return await fetch(`${baseurl}information`).then(res=>res.json())
  
  } catch (error) {
    console.log(error);
  }

}

export default getInformation;