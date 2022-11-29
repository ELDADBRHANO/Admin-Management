const clothes = require("../models/Clothes");


const getClothes = async (req, res) => {
  await clothes.find({}).then((data, err) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (data.length == 0) {
      return res
        .status(401)
        .json({ success: false, message: "No Clothes available" });
    }
    res.status(200).json({ success: true, data: data });
  });
};


const getClothesById= async (req,res)=>{
  await clothes.findById(req.params.id)
  .then((data)=>{
    if(!data){
      return res.json({success:false, message:'No clothes found!'})
    }
    return res.status(200).json({success:true, data:data})
  })
  .catch(err=>{
    if(err) res.status(400).json({success:false, error:err})
  })
}



const updateClothe = async (req,res)=>{
  await clothes.findByIdAndUpdate(req.params.id, req.body)
  .then(result=>res.status(200).json({success:true, result}))
  .catch(err=>res.status(400).json({success:false, error:err}))
}


const createClothes = async(req,res)=>{
  await clothes.insertMany(req.body.clothes)
  .then((clothe)=>{
    if(clothe.length==0){
      return res.status(400).json({success:false,message:"Cant send empty fields!"})
    }
    return res.status(200).json({success:true, message:"Added successfully"})
  })
  .catch((err)=>{
    return res.status(400).json({success:false, error:err})
  })
}


const deleteClothe=async (req,res)=>{
  await clothes.findByIdAndDelete(req.params.id)
  .then(()=>res.status(200).json({success:true, message:'Delete successfully'}))
  .catch(err=>res.status(401).json({success:false, error:err}))
}

module.exports= {
  createClothes,
  getClothes,
  updateClothe,
  getClothesById,
  deleteClothe
}