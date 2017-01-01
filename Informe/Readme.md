# SAILS.JS

### Materia : `Tecnologías Web con JavaScript`

<p align="center">
<img src="http://sailsjs.com/images/hero_squid@2x.png" alt="Logo Sails.js" title="Logo Sails.js" />
</p>

### Tema : `JavaScript Parte 2`
### Fecha : `2016-12-21`
### Estudiante : `Homero Darío Arias Puente`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `7`

---
<a name="cabecera"></a>
## Índice de contenidos
- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marcoTeorico">Marco teórico</a>
  - <a href="#sails">Sails.js</a>
  - <a href="#assets">Assets</a>
  - <a href="#views">Views</a>
  - <a href="#pipelines">Pipelines</a>
  - <a href="#controllers">Controllers</a>

- <a href="#desarrolloDeLaPractica">Desarrollo de la práctica</a>
- <a href="#conclusiones">Conclusiones y recomendaciones</a>

<a name="tema"></a>
## Tema
El tema de la práctica es: `Sails.js`

<a name="objetivos"></a>
## Objetivos
- Desarrollar el conocimiento básicos de JavaScript.
- Conocer la forma correcta para utilizar Sails.js en el desarrollo de aplicaciones que utilicen JavaScript.
- Comprender los conceptos acerca del patrón de arquitectura de software Modelo-Vista-Controlador.

<a href="#cabecera">A la cabecera</a>

<a name="marcoTeorico"></a>
## Marco teórico

<a name="sails"></a>
### Sails.js
Sails es, un framework web. El enfoque de Sails es acoplar ligreamente los componenetes para que puedan agregarse o retirarse de su aplicación a voluntad. Sails es lo suficientemente flexible como para permitirle explorar y crear cuando tiene tiempo pero también proporciona automatización cuando no lo hace.
 
El núcleo de Sails consta de veinte ganchos diferentes: módulos que modifican el tiempo de ejecución del servidor, agregan middleware, enlazan a los oyentes de rutas o de alguna otra forma agregan capacidades adicionales al framework. Esto le da acceso para anular o deshabilitar cada componente y parámetro de configuración en Sails. Estos ganchos se cargan en tiempo de ejecución cuando Sails se inicia.
(Fuente: [SailsJS](http://sailsjs.com/whats-that))

<a href="#cabecera">A la cabecera</a>

<a name="assets"></a>
### Assets
Assets se refieren a archivos estáticos (js, css, imágenes, etc) en su servidor que desea hacer accesible al mundo exterior. En Sails, estos archivos se colocan en la carpeta `assets/`. Cuando levante su aplicación, agregue archivos a la carpeta `assets/`, o cambie los assets existentes, Sails procesa y sincroniza esos archivos en una carpeta oculta (.tmp / public /).
(Fuente: [SailsJS](http://sailsjs.com/documentation/concepts/assets))

<a href="#cabecera">A la cabecera</a>

<a name="views"></a>
### Views
En Sails, las vistas son plantillas que se compilan en el servidor en las páginas HTML. En la mayoría de los casos, las vistas se utilizan como respuesta a una solicitud HTTP entrante.
Alternativamente, una vista puede ser compilada directamente en una cadena HTML para su uso en el código del backend.
Las vistas se definen por defecto en la carpeta `vistas/` de la aplicación.
(Fuente: [SailsJS](http://sailsjs.com/documentation/concepts/views))

<a href="#cabecera">A la cabecera</a>

<a name="pipelines"></a>
### Pipelines
El archivo **pipeline.js** en la aplicación Sails determina el orden en que sus hojas de estilo, JavaScript y los archivos de plantilla del lado del cliente deben ser compilados y enlazados como etiquetas `<script>` o `<link>`.
(Fuente: [SailsJS](http://sailsjs.com/documentation/anatomy/tasks/pipeline-js))

<a href="#cabecera">A la cabecera</a>

<a name="controllers"></a>
### Controllers
Los controladores, son los principales objetos en una aplicación Sails y son los responsables de responder a las solicitudes de un navegador web, una aplicación móvil o cualquier otro sistema capaz de comunicarse con un servidor. A menudo actúan como intermediarios entre los modelos y las vistas. Para muchas aplicaciones, los controladores contendrán la mayor parte de la lógica de negocio de su proyecto.
Los controladores están compuestos de un conjunto de métodos llamados acciones (o a veces "acciones de controlador"). Las acciones están enlazadas a rutas en su aplicación, de modo que cuando un cliente solicita la ruta, la acción se ejecuta para realizar alguna lógica de negocios y enviar una respuesta.
(Fuente: [SailsJS](http://sailsjs.com/documentation/concepts/controllers))

<a href="#cabecera">A la cabecera</a>

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

