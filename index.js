const express = require('express');
const mongoose = require('mongoose');
const user = require('./routes/users');
const auth = require('./routes/auth');
const messages = require('./routes/messages');
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if (req.method === 'OPTIONS') {
    req.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

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
app.use('/api/auth', auth);
app.use('/api/messages', messages);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('server is running'));
