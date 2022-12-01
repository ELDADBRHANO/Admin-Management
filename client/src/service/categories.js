const getCategories = async()=>{
  try {
    return await fetch('http://localhost:5000/categories').then(res=>res.json())
  
  } catch (error) {
    console.log(error);
  }

}

export default getCategories;