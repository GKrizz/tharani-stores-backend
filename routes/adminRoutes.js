// routes/adminRoutes.js
const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

router.post("/product", adminController.addProduct);
router.delete("/product/:id", adminController.removeProduct);
router.get("/order/:id", adminController.trackDelivery);
router.post("/assign-delivery", adminController.assignDeliveryPerson);
router.get("/sales", adminController.viewSales);

module.exports = router;
