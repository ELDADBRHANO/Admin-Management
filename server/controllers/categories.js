const categories = require("../models/categories");


const getDocumentsNumber=async (req,res)=>{
 await categories.countDocuments({}).then(res=>
     res
  )
  .catch(err=> res.status(400).json({success:false}))
}


const getCategories = async (req,res) => {
  const countFunc = getDocumentsNumber()
  await categories
    .find({})
    .then((data, err) => {
      if (err) {
        return res.status(200).json({ success: false, error: err });
      }
      if (data.length == 0) {
        return res
          .status(400)
          .json({
            success: false,
            message: "There is no categories to view at this Time.",
          });
      }
      res.status(200).json({ success: true, data: data, count:countFunc });
    })
    .catch((err) => {
      if (err) res.status(400).json({ success: false, error: err });
    });
};

const createCategories = async (req, res) => {
  await categories
    .insertMany(req.body.categories)
    .then((equipment) => {
      if (equipment.length == 0) {
        return res
          .status(400)
          .json({ success: false, message: "Cant send empty fields!" });
      }
      return res
        .status(300)
        .json({ success: true, message: "categories added successfully." });
    })
    .catch((err) => {
      res.status(400).json({ success: false, error: err });
    });
};

const deleteCategories=async (req,res)=>{
  await categories.findByIdAndDelete(req.params.id)
  .then(()=>res.status(200).json({success:true, message:'Delete successfully'}))
  .catch(err=>res.status(401).json({success:false, error:err}))
}
const updateCategory = async (req,res)=>{
  await categories.findByIdAndUpdate(req.params.id, req.body)
  .then(result=>res.status(200).json({success:true, result}))
  .catch(err=>res.status(400).json({success:false, error:err}))
}

const getCategoryById= async (req,res)=>{
  await categories.findById(req.params.id)
  .then((data)=>{
    if(!data){
      return res.json({success:false, message:'No categories found!'})
    }
    return res.status(200).json({success:true, data:data})
  })
  .catch(err=>{
    if(err) res.status(400).json({success:false, error:err})
  })
}

module.exports = {
  createCategories,
  
  getCategories,
  deleteCategories,
  updateCategory,
  getCategoryById
};
