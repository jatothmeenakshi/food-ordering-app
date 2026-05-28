const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
require('dotenv').config();
const menuRoutes=require('./routes/menuRoutes');
const orderRoutes = require('./routes/orderRoutes');
const authRoutes=require('./routes/authRoutes');
const app=express();
app.use(cors());
app.use(express.json());
app.use('/api/menu',menuRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/auth',authRoutes);
mongoose.connect(process.env.MONGO_URI)
 .then(()=>console.log('MongoDB connected!'))
 .catch((err)=>console.log('DB Error:',err));
app.get('/',(req,res)=>{
    res.send('Food Ordering API is running')

});
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log('MongoDB connected!');
const PORT=process.env.PORT||5000;
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
});
})
.catch((err)=>console.log('DB eroor:',err));