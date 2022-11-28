const mongoose = require('mongoose');

const shoesSchema = new mongoose.Schema({
  id:{type:Number,required:true},
  shoesType:{type:String,required:true},
  brand:{type:String,required:true},
  price:{type:Number,required:true},
  isOnSale:{type:Boolean,required:true},
  link:{type:String,required:true}
})

module.exports = mongoose.model('Shoes',shoesSchema)