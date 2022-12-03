const mongoose =require('mongoose');

const ordersSchema = new mongoose.Schema({
  orderNumber:{type:String,required:true},
  name:{type:String,required:true},
  address:{type:Object,required:true},
  ETD:{type:String,required:true},
  productsNumbers:{type:Number,required:true},
  price:{type:Number,required:true},
})

module.exports = mongoose.model('orders',ordersSchema)