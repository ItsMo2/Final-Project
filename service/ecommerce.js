import Cart from '../models/cart.js';

const createCartService = async () => {
    return await Cart.create({ items: [] });
};

const addItemToCartService = async (cartId, product, quantity) => {
    return await Cart.findByIdAndUpdate(
        cartId,
        { $push: { items: { product, quantity } } },
        { runValidators: true, new: true }
    );
};
const getCartService = async (cartId) => {
    return await Cart.findById(cartId).populate('items.product');
};

export { createCartService, addItemToCartService, getCartService };