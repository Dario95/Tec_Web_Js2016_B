/**
 * RazaController
 *
 * @description :: Server-side logic for managing Razas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  crearRaza: function (req, res) {
    var parametros = req.allParams();

      if (parametros.nombre) {
        Raza.create({
          nombre: parametros.nombre,
        }).exec(function (error, razaCreado) {
          if (error) return res.view('error', {
            title: 'Error',
            error: {
              descripcion: 'Hubo Problemas creando la raza, intentalo de nuevo: '+error,
              url: '/crearRaza'
            }
          });
          Raza.find().exec(function (error, razasEncontrados) {
            if (error)
            {
              return res.serverError();
            }
            sails.log.info(razasEncontrados);
            return res.view('vistas/Raza/listarRazas', {
              razas: razasEncontrados
            })
          });
        });
      } else {
        return res.view('error', {
          title: 'Error',
          error: {
            descripcion: 'No envia todos los parametros',
            url: '/crearRaza'
          }
        });
      }

  },
};
