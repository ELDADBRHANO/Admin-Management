const mongoose =require('mongoose');

const productSchema = new mongoose.Schema({
  productNumber:{type:String,required:true}
})

module.exports = mongoose.model('products',productSchema)