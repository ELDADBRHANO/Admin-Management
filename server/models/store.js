const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
  storeName:{type:String,required:true},
  numOfOrders:{type:Number,required:true},
  address:{type:String,required:true},
})

module.exports = mongoose.model('store',storeSchema)