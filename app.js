import express from 'express';
import connectDB from "./db/connect.js";
import dotenv from 'dotenv'
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
dotenv.config()

const app = express()
app.use(express.json())
connectDB()

const port = process.env.PORT || 3000;

app.listen(port,() => {
    console.log(`Server running on port ${port}`)
})

app.use('/products',productRouter)
app.use('/carts',cartRouter)

app.use((err,req,res,next) => {
    console.error(err.stack)

    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        status:'error',
        message:err.message || 'something went wrong'
    })
})