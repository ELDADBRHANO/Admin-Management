import { baseurl } from "./categories";
const getDepartments = async()=>{
  try {
    return await fetch(`${baseurl}department`).then(res=>res.json())
  
  } catch (error) {
    console.log(error);
  }

}

export default getDepartments;