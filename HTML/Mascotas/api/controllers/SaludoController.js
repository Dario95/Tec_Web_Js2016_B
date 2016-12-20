/**
 * SaludoController
 *
 * @description :: Server-side logic for managing saludoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	hola:function(req,res){
      if(req.method === 'GET'){
            res.json({
               nombre:'Hola get'
            });
            
        }
        else if(req.method === 'POST'){
            res.json({
               nombre:'Hola post' 
            });
            
        }
        else{
            res.json({
               nombre:'Hola a todos' 
            });
            
        }  
        
    },
    adios:function(req,res){
        res.send("adios");
        
    },
    hora:function(req,res){
        res.send("Hora");
        
    }
};

