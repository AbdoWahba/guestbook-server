const express = require('express');
const mongoose = require('mongoose');
const user = require('./routes/users');
const auth = require('./routes/auth');
const app = express();

app.use(express.json());

const db = require('./config/keys').mongoURI;

mongoose
  .connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => console.log('database connected...'))
  .catch((err) => console.log(err));

app.use('/api/users', user);
app.use('/api/aith', auth);

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => console.log('server is running'));
