// controllers/adminController.js
const Product = require("../models/Product");
const Order = require("../models/Order");
const Delivery = require("../models/Delivery");

// Add Product
exports.addProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json({ message: "Product added successfully!" });
  } catch (error) {
    res.status(400).json({ error: "Failed to add product" });
  }
};

// Remove Product
exports.removeProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Product removed successfully!" });
  } catch (error) {
    res.status(400).json({ error: "Failed to remove product" });
  }
};

// Track Delivery Status
exports.trackDelivery = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate("deliveryPerson");
    res.status(200).json(order);
  } catch (error) {
    res.status(400).json({ error: "Failed to track delivery" });
  }
};

// Assign Delivery Person to Order
exports.assignDeliveryPerson = async (req, res) => {
  try {
    const { orderId, deliveryId } = req.body;
    const order = await Order.findById(orderId);
    const deliveryPerson = await Delivery.findById(deliveryId);
    
    order.deliveryPerson = deliveryPerson._id;
    await order.save();
    
    deliveryPerson.assignedOrders.push(order._id);
    await deliveryPerson.save();

    res.status(200).json({ message: "Delivery person assigned successfully" });
  } catch (error) {
    res.status(400).json({ error: "Failed to assign delivery person" });
  }
};

// View Sales and Revenue Analysis
exports.viewSales = async (req, res) => {
  try {
    const orders = await Order.find({ status: "Delivered" });
    const totalSales = orders.length;
    const totalRevenue = orders.reduce((acc, order) => acc + order.totalAmount, 0);

    res.status(200).json({ totalSales, totalRevenue });
  } catch (error) {
    res.status(400).json({ error: "Failed to fetch sales data" });
  }
};
