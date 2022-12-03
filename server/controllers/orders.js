const orders = require("../models/orders");





const getOrders = async (req,res) => {

  await orders
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
            message: "There is no orders to view at this Time.",
          });
      }
      res.status(200).json(data);
    })
    .catch((err) => {
      if (err) res.status(400).json({ success: false, error: err });
    });
};

const createOrders = async (req, res) => {
  await orders
    .insertMany(req.body.orders)
    .then((equipment) => {
      if (equipment.length == 0) {
        return res
          .status(400)
          .json({ success: false, message: "Cant send empty fields!" });
      }
      return res
        .status(300)
        .json({ success: true, message: "orders added successfully." });
    })
    .catch((err) => {
      res.status(400).json({ success: false, error: err });
    });
};

const deleteOrders=async (req,res)=>{
  await orders.findByIdAndDelete(req.params.id)
  .then(()=>res.status(200).json({success:true, message:'Delete successfully'}))
  .catch(err=>res.status(401).json({success:false, error:err}))
}
const updateOrder = async (req,res)=>{
  await orders.findByIdAndUpdate(req.params.id, req.body)
  .then(result=>res.status(200).json({success:true, result}))
  .catch(err=>res.status(400).json({success:false, error:err}))
}

const getOrdersById= async (req,res)=>{
  await orders.findById(req.params.id)
  .then((data)=>{
    if(!data){
      return res.json({success:false, message:'No orders found!'})
    }
    return res.status(200).json({success:true, data:data})
  })
  .catch(err=>{
    if(err) res.status(400).json({success:false, error:err})
  })
}

module.exports = {
  createOrders,
  
  getOrders,
  deleteOrders,
  updateOrder,
  getOrdersById
};