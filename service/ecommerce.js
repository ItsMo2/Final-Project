import { Cart } from '../models/cart.js';

// Creates a new, empty cart
const createCartService = async () => {
    return await Cart.create({ items: [] });
};

// Adds an item to an existing cart
const addItemToCartService = async (cartId, product, quantity) => {
    return await Cart.findByIdAndUpdate(
        cartId,
        { $push: { items: { product, quantity } } },
        { runValidators: true, new: true }
    );
};

// Fetches a cart by ID, with full product details populated
const getCartService = async (cartId) => {
    return await Cart.findById(cartId).populate('items.product');
};

export { createCartService, addItemToCartService, getCartService };