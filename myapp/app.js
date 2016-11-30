var express = require('express');
var app = express();
var usuarios=[
    {
        id:1,
        nombre:'Pepe',
        cedula:'1234567890'
        
    },
    {
        id:2,
        nombre:'Carlos',
        cedula:'097854621'
        
    },
    {
        id:3,
        nombre:'Juan',
        cedula:'15478632568'
        
    }
    
    
]

app.get('/Javascrip/Usuario/', function (req, res) {
res.json(usuarios);
});
        
app.get('/Javascrip/Usuario/:idUsuario', function (req, res) {
  
    var parametros=req.params.idUsuario;
    console.log(parametros+""+usuarios[0].id);
    if(parametros==usuarios[0].id)
    {
        res.json(usuarios[0]);
    }else if(parametros==usuarios[1].id){
      res.json(usuarios[1]);  
    }else if(parametros==usuarios[2].id){
        res.json(usuarios[2]);
    }else{
        res.send('No se encontro usuario');
    }
});



app.post('/Javascript', function (req, res) {
  console.log(req.query.nombre);
  console.log(req.query.cedula);
    
//    if(req.query.nombre){
//      
//      
//  }
//    
//   if(req.query.cedula){
//       
//       
//   }
});
app.put('/Javascript', function (req, res) {
  res.send('Metodo PUT!');
});

app.listen(5050, function () {
  console.log('Example app listening on port 3000!');
});
