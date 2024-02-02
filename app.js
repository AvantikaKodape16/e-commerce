const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware for parsing JSON request bodies
app.use(bodyParser.json());

// Define your routes
const productRoutes = require('./routes/product.routes');
app.use('/api', productRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Export the configured Express app
module.exports = app;