const express = require('express');
const fs = require('fs')
const app = express();

const items = []

app.get('/', (req, res) => {
  res.send('Hi there!')
});

app.get('/menu', (req, res) => {
  res.send(items)
});

app.listen(3000, () => {
  console.log('server started');
});


//Loads menu from items.txt
try {
  const data = fs.readFileSync('menu.txt', 'utf8')
  let menuitems = data.split('\n')
  var i;
  for(i in menuitems){
    let menuitem = menuitems[i].split('-|-')
    menuitem = {
      Name:menuitem[0],
      Type: menuitem[1],
      Desc: menuitem[2],
      Img:menuitem[3],
      Price: menuitem[4]
    }
    items.push(menuitem)
  }
} catch (err) {
  console.error(err)
}