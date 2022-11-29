const dotEnv =require('dotenv');
dotEnv.config()
const express = require('express');
const cors = require('cors');
const clothesRouter = require('./routes/clothes-route')
const shoesRouter = require('./routes/shoes-router')
const sportEquipmentRouter = require('./routes/sportEquipment-router')
const teamsRouter = require('./routes/teams-router')
const db = require('./DB')
const app = express();
const port = 5000
app.use(cors());
app.use(express.json({extended:true}));
app.use(express.urlencoded({extended:true}));
app.use('/clothes',clothesRouter)
app.use('/shoes',shoesRouter)
app.use('/sportEquipment',sportEquipmentRouter)
app.use('/teams',teamsRouter)

app.get('/',(req,res)=>{
  res.send({message:"success"});
})

app.listen(port,()=>{
  console.log(`app is up on port:${port}`);
})





if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.get('*', (req, res)=>{
      res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}