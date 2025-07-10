const express = require('express');
const app = express();
const port = 3000;

const path = require('path');

// importing json data from data folder
const cars = require('./data/cars.json');


app.use(express.static(path.join(__dirname, 'public')));

-
app.get('/cars', (req, res) => {
  res.json(cars);
});


app.listen(port, () => {
  console.log(`Application URL: http://localhost:${port}`);
});
