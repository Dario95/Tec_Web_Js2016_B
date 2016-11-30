var express = require('express');
var app = express();

app.get('/Javascript', function (req, res) {
  res.send('Hello World!');
});
app.post('/Javascript', function (req, res) {
  res.send('Metodo POST!');
});
app.put('/Javascript', function (req, res) {
  res.send('Metodo PUT!');
});

app.listen(5050, function () {
  console.log('Example app listening on port 3000!');
});
