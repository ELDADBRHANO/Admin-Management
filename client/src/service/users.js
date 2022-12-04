import { baseurl } from "./categories";

const register = async()=>{
  await fetch(`${baseurl}users/register`,{
    method:"POST",
    body:JSON.stringify(),
    headers:{
      'Content-Type':'application/json'
    }
})
}

export default register;