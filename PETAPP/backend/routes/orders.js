const express = require('express');
const mongoose = require('mongoose');
const Order = require('../models/order');
const Product = require('../models/product');

const router = express.Router();

// GET: Fetch orders for a specific user
router.get('/:userId', async (req, res) => {
  const { userId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ error: 'Invalid userId' });
  }

  try {
    const cart = await Order.findOne({ userId }).populate('products.productId');
    res.status(200).json({ products: cart?.products || [] });
  } catch (err) {
    console.error('Error fetching cart:', err);
    res.status(500).json({ error: 'Failed to fetch user cart' });
  }
});



// POST: Add product to cart
router.post('/cart/:userId/:productId', async (req, res) => {
  const { userId, productId } = req.params;

  console.log('Received userId:', userId);
  console.log('Received productId:', productId);

  console.log('Checking ObjectId validity...');
  console.log('userId:', userId, '| Valid:', mongoose.Types.ObjectId.isValid(userId));
  console.log('productId:', productId, '| Valid:', mongoose.Types.ObjectId.isValid(productId));

  // Validate IDs
  if (
    !mongoose.Types.ObjectId.isValid(userId) ||
    !mongoose.Types.ObjectId.isValid(productId)
  ) {
    return res.status(400).json({ error: 'Invalid userId or productId' });
  }

  try {
    // Fetch product
    const product = await Product.findById(productId);
    if (!product || product.stock <= 0) {
      return res.status(400).json({ error: 'Product out of stock or not found' });
    }

    // Decrease stock
    product.stock -= 1;
    await product.save();

    // Try to increment quantity if product already in cart
    const existingCart = await Order.findOneAndUpdate(
      { userId, 'products.productId': productId },
      { $inc: { 'products.$.quantity': 1 } },
      { new: true }
    ).populate('products.productId');

    if (existingCart) {
      return res.json(existingCart);
    }

    // Else push new product into cart
    const newCart = await Order.findOneAndUpdate(
      { userId },
      {
        $push: { products: { productId, quantity: 1 } },
        $setOnInsert: { userId }
      },
      { upsert: true, new: true }
    ).populate('products.productId');

    res.json(newCart);
  } catch (err) {
    console.error('Error updating cart:', err);
    res.status(500).json({ error: 'Server error while updating cart' });
  }
});

router.get('/users', async (req, res) => {
  try {
    const users = await users.find({ role: 'user' }, 'email');
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

module.exports = router;