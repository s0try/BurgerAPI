const express = require('express');
const fs = require('fs')
const app = express();

var items;
app.get('/', (req, res) => {
  res.send('Hi there!')
});

app.get('/menu', (req, res) => {
  res.send(items)
});

app.listen(3000, () => {
  console.log('server started');
});



//Loads menu from items.json

fs.readFile('menu.json', 'utf-8', (err, data) => {
    if (err) {
        throw err;
    }

    items = JSON.parse(data.toString());

});

