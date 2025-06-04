const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://mongo:27017/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

app.listen(5000, () => console.log('Server started on port 5000'));
