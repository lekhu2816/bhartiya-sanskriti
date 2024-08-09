import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import connectDB from './config/db.js';
import userRouter from './routes/userRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import productRoute from './routes/productRoutes.js';

// app config
const app=express();
const PORT=process.env.PORT||5000;

// middleware
app.use(express.json());
app.use(cors());

// Database connection
connectDB();

// api endpoints
app.use('/api/user',userRouter);
app.use('/api/admin',adminRoutes);
app.use('/api/product',productRoute)
app.use( '/images' , express.static('./uploads'))

app.get('/',(req,res)=>{
    res.send("API Working");
})


app.listen(PORT,()=>{
    console.log(`Server is running in PORT ${PORT}`);
})