import express from 'express'
import {getAllProducts,createProduct,updateProduct,deleteProduct} from '../controller/productController.js'

const productRouter = express.Router()

productRouter.post('/',createProduct)
productRouter.get('/',getAllProducts)
productRouter.put('/:id',updateProduct)
productRouter.delete('/:id',deleteProduct)

export default productRouter;