const mongoose = require('mongoose');

const connectionToDb = process.env.CONNECTION_STRING;
mongoose.connect(connectionToDb,{
  useNewUrlParser:true,
  useUnifiedTopology:true
})
.then(()=>{console.log('Connection to MongoDB success.');})
.catch((err)=>{console.error("connection failed:", err.message);})

module.exports=mongoose.connection
