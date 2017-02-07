/**
 * RutasController
 *
 * @description :: Server-side logic for managing Rutas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    
    inicio:function(req,res){
            
        // res.view(String: Nombre vista, Datos JSON)
        return res.view('homepage')
        
    },
    crearUsuario:function(req,res){
        return res.view('vistas/Usuario/crearUsuario')
    }
    ,
    error:function(req,res){
        return res.view('vistas/error',{error:{
                        descripcion:"Usted esta por error en esta ruta dirijase a Inicio",
                        rawError:"Ruta equivocada",
                        url:"/Inicio"
                        }
                                       });
    }
    
};


    
    
    
    
    
    