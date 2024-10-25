const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Connect to MongoDB
const mongoURL = "mongodb://127.0.0.1:27017/tharani_db";
mongoose.connect(mongoURL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
mongoose.connection.once('open', () => {
    console.log("MongoDB connected successfully!");
});

// Sample Order Route
app.post('/order', (req, res) => {
    const { productId, customerId, quantity, totalPrice, deliveryDetails } = req.body;
    // Your logic to handle order placement
    res.status(201).json({ message: 'Order placed successfully!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
