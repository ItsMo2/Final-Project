import {Product} from '../models/product.js';

const getAllProducts = async(req,res) => {
    try{
        const products = await Product.find()
        res.status(200).json(products)

    }catch (err) {
        res.status(500).json({message : 'failed to fetch all products', error:err.message})
    }
}
const createProduct = async(req,res) => {
    try {
        const newProduct = await Product.create(req.body)
        res.status(201).json(newProduct)
    } catch (err) {
        res.status(400).json({message:'couldnt create a product',error:err.message})
    }  
}
const updateProduct = async(req,res) => {
    try{
    const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        {runValidators:true,new:true}
    )
    if(!updatedProduct) {
        return res.status(404).json({message:"product not found"})
    }
    res.status(200).json({updatedProduct})}
    catch(err) {
        res.status(400).json({message:'failed to update the product',error:err.message})
    }
}
const deleteProduct = async(req,res) => {
    try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id)
        if (!deletedProduct) {
            return res.status(404).json({message:'product not found'})
        }
    res.status(200).json({message:'Product deleted successfully'})
    }catch (err) {
        res.status(500).json({message:'failed to delete product',error:err.message})
    }
}
export {getAllProducts,createProduct,updateProduct,deleteProduct}