const mongoose = require('mongoose');

const categoriesSchema = new mongoose.Schema({
  id:{type:Number,required:true},
  teamName:{type:String,required:true},
  quantity:{type:Number,required:true}
})



module.exports = mongoose.model('teams',categoriesSchema)