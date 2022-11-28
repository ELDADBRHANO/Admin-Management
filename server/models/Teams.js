const mongoose = require('mongoose');

const teamsSchema = new mongoose.Schema({
  id:{type:Number,required:true},
  teamName:{type:String,required:true},
})



module.exports = mongoose.model('teams',teamsSchema)