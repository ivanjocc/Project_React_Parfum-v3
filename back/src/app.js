const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

const cors = require('cors');

app.use(express.json());

app.use(cors());


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("Conexión a MongoDB establecida"))
  .catch(err => console.log(err));

app.use('/api/products', require('./routes/products'));
app.use('/api/users', require('./routes/users'));

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
