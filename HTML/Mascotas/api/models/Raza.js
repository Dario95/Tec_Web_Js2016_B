/**
 * Raza.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      nombre:{
          type: 'string',
          enum:['Bulldog','Chihuahua','Pitbull'],
          required:true
      },
      //Mascotas -> es el nombre en plural del modelo a relacionarse
      mascotas:{
          //Collection -> Nombre del modelo en Sails
          collection: 'Mascota',
          //Via-> es el campo por el cual vamos a relaciones FOREING KEY
          via:'idRaza'
      }
  }
};

