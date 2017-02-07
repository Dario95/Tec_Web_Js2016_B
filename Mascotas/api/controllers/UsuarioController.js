/**
 * UsuarioController
 *
 * @description :: Server-side logic for managing Usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */



module.exports = {

    crearUsuario: function (req, res) {
        //   Se accede asi: /Usuario/crearUsuario

        // Guardando todos los parametros en la variable parametros

        var parametros = req.allParams();
        console.log(parametros);

        if (req.method == 'POST') {
            if (parametros.nombres && parametros.apellidos) {
                //creo el usuario
                if(parametros.correo == ""){
                    parametros.correo = null;
                }
                Usuario.create({
                    nombres: parametros.nombres,
                    apellidos: parametros.apellidos,
                    correo: parametros.correo
                }).exec(function (error, usuarioCreado) {
                    if (error) {
                      return res.view('vistas/error',{error:{
                        descripcion:"Fallo crear el usuario",
                        rawError:"Algo paso :O",
                        url:"/registrarUsuario"
                        }});  
                        
                    }
                });
                
                return res.view('vistas/Usuario/crearUsuario');
            } else {
                // bad Request
                return res.view('vistas/error',{error:{
                        descripcion:"Llena todos los parametros, apellidos y nombres",
                        rawError:"Fallo en envio de parametros",
                        url:"/registrarUsuario"
                        }});
            }
        } else {
            return res.view('vistas/error',{error:{
                        descripcion:"Error en el uso del Metodo HTTP",
                        rawError:"HTTP invalido",
                        url:"/registrarUsuario"
                        }});
        }

    },
    crearUsuarioForm: function (req, res) {

        var parametros = req.allParams();
        console.log(parametros);

        if (req.method == 'POST') {
            if (parametros.nombres && parametros.apellidos) {
                //creo el usuario
                Usuario.create({
                    nombres: parametros.nombres,
                    apellidos: parametros.apellidos,
                    correo: parametros.correo
                }).exec(function (error, usuarioCreado) {
                    if (error) return res.serverError()
                    sails.log.info(usuarioCreado);

                    return res.view('vistas/home', {
                        titulo: 'Inicio',
                        numero: 1,
                        mauricio: {
                            nombre: 'Mauricio',
                            cedula: 1718137159
                        }
                    });
                });




            } else {
                // bad Request
                return res.badRequest('No envia todos los parametros');
            }
        } else {
            return res.badRequest('Metodo invalido');
        }

    }

};