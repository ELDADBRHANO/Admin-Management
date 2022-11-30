const store = require("../models/store");


const getStore = async (req, res) => {
  await store.find({}).then((data, err) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (data.length == 0) {
      return res
        .status(400)
        .json({ success: false, message: "No store available" });
    }
    res.status(200).json({ success: true, data: data });
  });
};


const getStoreById= async (req,res)=>{
  await store.findById(req.params.id)
  .then((data)=>{
    if(!data){
      return res.json({success:false, message:'No store found!'})
    }
    return res.status(200).json({success:true, data:data})
  })
  .catch(err=>{
    if(err) res.status(400).json({success:false, error:err})
  })
}



const updateStore = async (req,res)=>{
  await store.findByIdAndUpdate(req.params.id, req.body)
  .then(result=>res.status(200).json({success:true, result}))
  .catch(err=>res.status(400).json({success:false, error:err}))
}


const createStore = async(req,res)=>{
  await store.insertMany(req.body.store)
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


const deleteStore=async (req,res)=>{
  await store.findByIdAndDelete(req.params.id)
  .then(()=>res.status(200).json({success:true, message:'Delete successfully'}))
  .catch(err=>res.status(401).json({success:false, error:err}))
}

module.exports= {
  createStore,
  getStore,
  updateStore,
  getStoreById,
  deleteStore
}