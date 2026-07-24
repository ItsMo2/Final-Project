import { createCartService, addItemToCartService, getCartService } from '../service/ecommerce.js';

const createCart = async (req, res) => {
    try {
        const newCart = await createCartService();
        res.status(201).json(newCart);
    } catch (err) {
        res.status(500).json({ message: 'an error occurred during creating the cart', error: err.message });
    }
};

const addItemToCart = async (req, res) => {
    try {
        const { product, quantity } = req.body;
        const addedItem = await addItemToCartService(req.params.id, product, quantity);

        if (!addedItem) {
            return res.status(404).json({ message: "cart not found" });
        }
        res.status(200).json(addedItem);
    } catch (err) {
        res.status(400).json({ message: "couldnt add new item", error: err.message });
    }
};

const getCart = async (req, res) => {
    try {
        const fetchCart = await getCartService(req.params.id);

        if (!fetchCart) {
            return res.status(404).json({ message: "no cart found" });
        }
        res.status(200).json(fetchCart);
    } catch (err) {
        res.status(500).json({ message: 'An error occurred', error: err.message });
    }
};

export { getCart, addItemToCart, createCart };