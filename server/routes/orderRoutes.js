const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// POST - place a new order
router.post('/', async (req, res) => {
  try {
    const { items, total } = req.body;
    const order = new Order({ items, total });
    const savedOrder = await order.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET - get all orders
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;