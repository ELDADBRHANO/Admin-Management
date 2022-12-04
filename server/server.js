const dotEnv =require('dotenv').config();
const express = require('express');
const cors = require('cors');


const storeRouter = require('./routes/store')
const productRouter = require('./routes/products')
const ordersRouter = require('./routes/orders')
const departmentRouter = require('./routes/department')
const informationRouter = require('./routes/information')
const categoryRouter = require('./routes/category')
const usersRouter = require('./routes/user')
const passport = require('passport');
require('./config/passport')(passport);
const db = require('./DB')


const app = express();
const port = 5000


app.use(passport.initialize())
app.use(cors());
app.use(express.json({extended:true}));
app.use(express.urlencoded({extended:true}));
app.use('/store',storeRouter)
app.use('/department',departmentRouter)
app.use('/information',informationRouter)
app.use('/categories',categoryRouter)
app.use('/users',usersRouter);
app.use('/orders',ordersRouter);
app.use('/products',productRouter);



app.get('/',(req,res)=>{
  res.send({message:"success"});
})

app.listen(port,()=>{
  console.log(`app is up on port:${port}`);
})



const PORT = process.env.PORT||5000;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.get('*', (req, res)=>{
      res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}