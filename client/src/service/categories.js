export const baseurl ='https://admin-managment.onrender.com/'

const getCategories = async()=>{
  try {
    return await fetch(`${baseurl}categories`).then(res=>res.json())
  
  } catch (error) {
    console.log(error);
  }

}

export default getCategories;