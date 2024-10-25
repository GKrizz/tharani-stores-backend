// models/Order.js
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  deliveryPerson: { type: mongoose.Schema.Types.ObjectId, ref: "Delivery" },
  products: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: Number,
      price: Number
    }
  ],
  totalAmount: Number,
  status: { type: String, default: "Pending" }, // e.g., Pending, Dispatched, Delivered
  deliveryAddress: String,
  paymentMethod: { type: String, default: "Cash on Delivery" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", orderSchema);
