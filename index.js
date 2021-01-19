const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Testing github integration!')
});

app.listen(3000, () => {
  console.log('server started');
});