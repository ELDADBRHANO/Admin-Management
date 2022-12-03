const mongoose = require('mongoose');

const categoriesSchema = new mongoose.Schema({
  categoryName:{type:String,required:true},
  quantity:{type:Number,required:true}
})


module.exports = mongoose.model('categories',categoriesSchema)