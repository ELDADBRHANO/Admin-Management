const shoes = require('../models/Shoes');

const getShoes = async(req,res)=>{
  await shoes.find({})
  .then((data,err)=>{
    if(err){
      return res.status(200).json({success:false, error:err})
    }
    if(data.length==0){
      return res.status(400).json({success:false, message:'There is no Shoes to view at this Time.'})
    }
    res.status(200).json({success:true,data:data})
  })
  .catch(err=>{
    if(err) res.status(400).json({success:false, error:err})
  })
}

const findShoesById =async (req,res)=>{
  await shoes.findById(req.params.id)
  .then((data)=>{
    if(!data){
      return res.json({success:false,message:'No shoes available at the moment.'})
    }
    return res.status(200).json({success:true, data:data})
  })
  .catch((err)=>{
    res.status(401).json({success:false, error:err})
  })
}
const createShoes = async (req, res) => {
  await shoes.insertMany(req.body.flight)
  .then((shoe)=>{
    if(shoe.length==0){
      return res.status(400).json({success:false, message:"Cant send empty fields!"})
    }
    return res.status(300).json({success:true, message:"Shoes added successfully."})
  })
  .catch(err=>{
    res.status(400).json({success:false, error:err})
  })

};

const updateClothes =async (req,res)=>{
  await shoes.findByIdAndUpdate(req.params.id, req.body)
  .then(clothe=>{res.status(200).json({success:true, clothe})})
  .catch(err=>res.status(400).json({success:false, error:err}))
}

const deleteShoes = async(req,res)=>{
  await shoes.findByIdAndDelete(req.params.id)
  .then(()=>{res.status(200).json({success:true, message:"Deleted successfully."})})
  .catch(err=>{res.status(400).json({success:false, error:err})})
}
module.exports = {
  createShoes,
  getShoes,
  findShoesById,
  updateClothes,
  deleteShoes
}