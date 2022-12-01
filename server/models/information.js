const mongoose =require('mongoose');

const informationSchema = new mongoose.Schema({
  sport:{type:String,required:true},
  informationAbout:{type:String,required:true},
  price:Number,
  quantity:{type:Number,required:true},
  sales:{type:Number,required:true},
})

module.exports = mongoose.model('information',informationSchema)