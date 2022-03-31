const express = require('express');
const app = express();
const http = require('http');

app.get('/', (req, res) => {
  res.console.log('Hola')
});

app.listen(3000, () => {
  console.log('listening on *:3000');
});