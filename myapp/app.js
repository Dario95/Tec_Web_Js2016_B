var express = require('express');
var app = express();

app.get('/Javascript', function (req, res) {
//request=req
 
  console.log('Lo que tengo en el req!');
console.log(req);
  console.log('Lo que tengo en el res!');
    console.log(res);
    
      console.log('Cabeceras req!');
console.log(req.headers);
  console.log('Cabeceras res!');
    console.log(res.headers);
  //response=res
    
    var usuario ={
        nombre: 'Homero',
        cedula:'1751230820'
        
    }
    usuario.apellido='Arias';
    usuario.mascotas=["perro","gato"];
    usuario.casado='no';
    res.json(usuario);
 // res.send('Hello World!');
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
