const getStore = async()=>{
  try {
    return await fetch('http://localhost:5000/store/').then(res=>res.json())
  
  } catch (error) {
    console.log(error);
  }

}

export default getStore;