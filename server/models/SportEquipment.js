const mongoose =require('mongoose');

const sportEquipmentSchema = new mongoose.Schema({
  id:{type:Number,required:true},
  sport:{type:String,required:true},
  productName:{type:String,required:true},
  brand:{type:String,required:true},
  price:{type:Number,required:true},
  quantity:{type:Number,required:true},
  teamsId:Number,
  link:{type:String,required:true}
})

module.exports = mongoose.model('SportEquipment',sportEquipmentSchema)