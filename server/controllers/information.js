const information = require("../models/information");

const getInformation = async (req,res) => {
  await information.find({}).then((data, err) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
      if (data.length == 0) {
        return res
          .status(400)
          .json({
            success: false,
            message: "There is no information to view at this Time.",
          });
      }
      res.status(200).json({ success: true, data: data });
    })
    .catch((err) => {
      if (err) res.status(400).json({ success: false, error: err });
    });
};

const createInformation = async (req, res) => {
  await information
    .insertMany(req.body.information)
    .then((information) => {
      if (information.length == 0) {
        return res
          .status(400)
          .json({ success: false, message: "Cant send empty fields!" });
      }
      return res
        .status(300)
        .json({ success: true, message: "information added successfully." });
    })
    .catch((err) => {
      res.status(400).json({ success: false, error: err });
    });
};
const getInformationById= async (req,res)=>{
  await information.findById(req.params.id)
  .then((data)=>{
    if(!data){
      return res.json({success:false, message:'No information found!'})
    }
    return res.status(200).json({success:true, data:data})
  })
  .catch(err=>{
    if(err) res.status(400).json({success:false, error:err})
  })
}
const updateInformation = async (req,res)=>{
  await information.findByIdAndUpdate(req.params.id, req.body)
  .then(result=>res.status(200).json({success:true, result}))
  .catch(err=>res.status(400).json({success:false, error:err}))
}

const deleteInformation=async (req,res)=>{
  await information.findByIdAndDelete(req.params.id)
  .then(()=>res.status(200).json({success:true, message:'Delete successfully'}))
  .catch(err=>res.status(401).json({success:false, error:err}))
}
module.exports = {
  createInformation,
  getInformation,
  updateInformation,
  deleteInformation,
  getInformationById
};
