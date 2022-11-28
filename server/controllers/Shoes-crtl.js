const shoes = require('../models/Shoes');

const getShoes = async()=>{
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

module.exports = {
  createShoes,
  getShoes
}