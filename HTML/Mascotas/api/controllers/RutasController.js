/**
 * RutasController
 *
 * @description :: Server-side logic for managing Rutas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    home: function (req, res) {
        //res.vew(String: nombreVista, datos json)
        return res.view('vistas/home', {
            titulo: 'inicio',
            numero: 1,
            pato: {
                nombre: 'Homero',
                cedula: 1751230820
            }
        })
    },
    
     CrearUsuario: function (req, res) {
        //res.vew(String: nombreVista, datos json)
        return res.view('vistas/CrearUsuario')
    }
};