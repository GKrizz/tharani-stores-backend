const express = require("express");
const router = express.Router();
const Order = require("../models/orderModel"); // Adjust the path to your order model

// Endpoint to place an order
router.post("/", async (req, res) => {
  try {
    const newOrder = new Order({
      productId: req.body.productId,
      customerId: req.body.customerId,
      quantity: req.body.quantity,
      totalPrice: req.body.totalPrice,
      status: "Pending",
      deliveryDetails: req.body.deliveryDetails,
    });

    await newOrder.save();
    res.status(201).json({ message: "Order placed successfully!", order: newOrder });
  } catch (error) {
    res.status(500).json({ message: "Error placing order", error: error.message });
  }
});

module.exports = router;
