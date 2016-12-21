# 

> npm insall -g 

el -g nos deja utilizarlo globalmente

### Crear un proyecto en Sailsjs

´´´
> sails new Mascotas
´´´

### Levantar el servidor

´´´
>sails lift
´´´
´´´
> node app.js
´´´
El sailes les pide opciones si no estan definidas, las opciones son:

- 1: SAFE MODE no se va a alterar la base de datos

- 2: ALTER MODE se va a alterar la base de datos si nosotros hicimos cambios en los modelos por ejemplo.

- 3: DELETE MODE borra todos los datos de la base y vuelve a crear los modelos.

## Servidor Web de Sails.js

El servidor web de sails se encuentra localizado en la carpeta 
**assets**

## 

Para generar un controlador se utiliza el siguiente comando:
´´´
>sails generate controller saludo
´´´

## Generar un Api

´´´
> sails generate api Nombre
´´´

Una Api es una función de un controlador y un modelo

## Generar un modelo

´´´
> sails generate model Nombre
´´´

## API REST

Crear 

´http://localhost:1337/Usuario´

Método HTTP:

´POST´

Datos:

´´´javascript
//jason
{
    nombre:'Homero',
    apellido:'Arias',
    correo:'homero.arias@epn.edu.ec'
}
´´´

