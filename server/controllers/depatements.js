const department = require('../models/departments');

const getDepartment = async(req,res)=>{
  await department.find({})
  .then((data,err)=>{
    if(err){
      return res.status(200).json({success:false, error:err})
    }
    if(data.length==0){
      return res.status(400).json({success:false, message:'There is no department to view at this Time.'})
    }
    res.status(200).json({success:true,data:data})
  })
  .catch(err=>{
    if(err) res.status(400).json({success:false, error:err})
  })
}

const findDepartmentById =async (req,res)=>{
  await department.findById(req.params.id)
  .then((data)=>{
    if(!data){
      return res.json({success:false,message:'No department available at the moment.'})
    }
    return res.status(200).json({success:true, data:data})
  })
  .catch((err)=>{
    res.status(401).json({success:false, error:err})
  })
}
const createDepartment = async (req, res) => {
  await department.insertMany(req.body.department)
  .then((shoe)=>{
    if(shoe.length==0){
      return res.status(400).json({success:false, message:"Cant send empty fields!"})
    }
    return res.status(300).json({success:true, message:"department added successfully."})
  })
  .catch(err=>{
    res.status(400).json({success:false, error:err})
  })

};

const updateDepartment =async (req,res)=>{
  await department.findByIdAndUpdate(req.params.id, req.body)
  .then(clothe=>{res.status(200).json({success:true, clothe})})
  .catch(err=>res.status(400).json({success:false, error:err}))
}

const deleteDepartment = async(req,res)=>{
  await department.findByIdAndDelete(req.params.id)
  .then(()=>{res.status(200).json({success:true, message:"Deleted successfully."})})
  .catch(err=>{res.status(400).json({success:false, error:err})})
}
module.exports = {
  createDepartment,
  getDepartment,
  findDepartmentById,
  updateDepartment,
  deleteDepartment
}