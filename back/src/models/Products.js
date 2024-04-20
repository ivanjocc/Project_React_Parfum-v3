const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  image: String,
  note: String
});

module.exports = mongoose.model('Product', productSchema);
