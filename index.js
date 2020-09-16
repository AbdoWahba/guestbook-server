const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

const db = require('./config/keys').mongoURI;

mongoose
  .connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log('database connected...'))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('server is running'));
