const mongoose = require('mongoose');

const productVariantSchema = new mongoose.Schema({
  name: String,
  SKU: String,
  additionalCost: Number,
  stockCount: Number,
});

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  variants: [productVariantSchema],
});

module.exports = mongoose.model('Product', productSchema);