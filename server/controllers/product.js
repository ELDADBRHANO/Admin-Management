const products = require("../models/products");





const getProducts = async (req,res) => {

  await products
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
            message: "There is no products to view at this Time.",
          });
      }
      res.status(200).json({ success: true, data: data });
    })
    .catch((err) => {
      if (err) res.status(400).json({ success: false, error: err });
    });
};

const createProducts = async (req, res) => {
  await products
    .insertMany(req.body.products)
    .then((equipment) => {
      if (equipment.length == 0) {
        return res
          .status(400)
          .json({ success: false, message: "Cant send empty fields!" });
      }
      return res
        .status(300)
        .json({ success: true, message: "products added successfully." });
    })
    .catch((err) => {
      res.status(400).json({ success: false, error: err });
    });
};

const deleteProducts=async (req,res)=>{
  await products.findByIdAndDelete(req.params.id)
  .then(()=>res.status(200).json({success:true, message:'Delete successfully'}))
  .catch(err=>res.status(401).json({success:false, error:err}))
}
const updateProduct = async (req,res)=>{
  await products.findByIdAndUpdate(req.params.id, req.body)
  .then(result=>res.status(200).json({success:true, result}))
  .catch(err=>res.status(400).json({success:false, error:err}))
}

const getProductById= async (req,res)=>{
  await products.findById(req.params.id)
  .then((data)=>{
    if(!data){
      return res.json({success:false, message:'No products found!'})
    }
    return res.status(200).json({success:true, data:data})
  })
  .catch(err=>{
    if(err) res.status(400).json({success:false, error:err})
  })
}

module.exports = {
  createProducts,
  getProducts,
  deleteProducts,
  updateProduct,
  getProductById
};