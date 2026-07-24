// what does my data look like
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema  ({
    name:{
        type: String,
        trim: true,
        required: true
    },
    price:{
        type: Number,
        required: true,
        min: 0
    },
    description:{
        type: String,
        required: true
    },
    category:{
        type: String,
        trim: true, 
        required: true
    },
    image:{
        type: String,
        required: true
    }



})

const Product = mongoose.model('Product',productSchema)
export {Product}