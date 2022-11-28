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


module.exports= {
  createClothes,
  getClothes
}