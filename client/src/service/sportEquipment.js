const getEquipments = async()=>{
  try {
    return await fetch('http://localhost:5000/sportEquipment').then(res=>res.json()).then(res=>console.log(res))
  } catch (error) {
    console.log(error);
  }
}
getEquipments()

export default getEquipments;