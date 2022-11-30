const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
  id:{type:Number,required:true},
  storeName:{type:String,required:true},
  quantity: {type:Number,required:true},
  isOpen:Boolean,
  link:String
})

module.exports = mongoose.model('Clothes',storeSchema)