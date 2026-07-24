import express from 'express';
import {getCart,addItemToCart,createCart} from '../controller/cartController.js'

const cartRouter = express.Router()

cartRouter.get('/:id',getCart)
cartRouter.post('/',createCart)
cartRouter.post('/:id/items',addItemToCart)

export default cartRouter;