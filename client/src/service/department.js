const getDepartments = async()=>{
  try {
    return await fetch('http://localhost:5000/department/').then(res=>res.json())
  
  } catch (error) {
    console.log(error);
  }

}

export default getDepartments;