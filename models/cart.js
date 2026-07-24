// what does my data look like
import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema ({
    items:[
        {
            product:{
                type:mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            },
            quantity:{
                type:Number,
                required:true,
                min:1
            }
        }
    ]
},{timestamps:true});

const Cart = mongoose.model('Cart',cartSchema);

export default Cart;