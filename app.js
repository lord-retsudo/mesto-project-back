// const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const router = require('./routes/router');

const { PORT = 3000 } = process.env;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
  req.user = {
    _id: '5ea7855beb868b23e88404f3',
  };

  next();
});

app.use('/', router);
app.use('/', (req, res) => { res.status(404).json({ message: 'Запрашиваемый ресурс не найден' }); });

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
