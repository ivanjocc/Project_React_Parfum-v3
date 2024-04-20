const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


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
