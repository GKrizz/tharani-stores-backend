// models/Delivery.js
const mongoose = require("mongoose");

const deliverySchema = new mongoose.Schema({
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true, unique: true },
  assignedOrders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }]
});

module.exports = mongoose.model("Delivery", deliverySchema);
