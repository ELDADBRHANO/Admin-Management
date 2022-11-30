const register = async()=>{
  await fetch('http://localhost:3000/users/register',{
    method:"POST",
    body:JSON.stringify(),
    headers:{
      'Content-Type':'application/json'
    }
})
}

export default register;