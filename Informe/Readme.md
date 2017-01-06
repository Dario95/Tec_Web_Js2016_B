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

- <a href="#desarrollo">Desarrollo de la práctica</a>
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

<a name="desarrollo"></a>
## Desarrollo de la práctica
---
### Instalar Sails.js.
Para instalar Sails.js ejecutamos el siguiente comando desde consola:

> npm insall -g sails

el -g nos deja utilizarlo globalmente

<p align="center">
<img src="https://raw.githubusercontent.com/Dario95/Tec_Web_Js2016_B/10-sails-02/Informe/Graficos/npm%20sails.jpg">
</p>


### Crear un proyecto en Sails.js
Para ellos es necesario movernos al directorio donde queremos crear el proyecto Sails, y una vez allí ejecutar el siguiente comando desde consola:

> sails new Mascotas

<p align="center">
<img src="https://github.com/Dario95/Tec_Web_Js2016_B/blob/10-sails-02/Informe/Graficos/sails%20new.jpg?raw=true">
</p>

### Levantar el servidor

Para levantar el servidor debemos ingresar en la carpeta que se ha creado para el proyecto; para ello debemos ejecutar:

>sails lift

<p align="center">
<img src="https://github.com/Dario95/Tec_Web_Js2016_B/blob/10-sails-02/Informe/Graficos/directory%20sails.jpg?raw=true">
</p>

<p align="center">
<img src="https://github.com/Dario95/Tec_Web_Js2016_B/blob/10-sails-02/Informe/Graficos/sails%20lift.jpg?raw=true">
</p>

Sails pide opciones si no estan definidas, las opciones son:

- 1: SAFE MODE no se va a alterar la base de datos

- 2: ALTER MODE se va a alterar la base de datos si nosotros hicimos cambios en los modelos por ejemplo.

- 3: DELETE MODE borra todos los datos de la base y vuelve a crear los modelos.


En el navegador ingresamos a la URL ```http://localhost:1337/``` y observamos la siguiente página.

<p align="center">
<img src="https://github.com/Dario95/Tec_Web_Js2016_B/blob/10-sails-02/Informe/Graficos/localhost.jpg?raw=true">
</p>



### Servidor Web de Sails.js

El servidor web de sails se encuentra localizado en la carpeta 
**assets**
Dentro de esta carpeta crearemos la carpeta *App* y dentro de ella los archivos:
- index.html
- estilo.css
- app.js

<p align="center">
<img src="https://github.com/Dario95/Tec_Web_Js2016_B/blob/10-sails-02/Informe/Graficos/sails%20mascotas.jpg?raw=true">
</p>

El contenido de los archivos debe ser el siguiente:
#### index.html

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>
    <h1>Hola mundo</h1>
    <script src="App.js">
    </script>
</body>
</html>
```

#### estilos.css


```javascript
body {
    background-color: darkblue;
    color: white;
}
```

#### App.js
```javascript
alert("No es bueno utilizar alert");
```
Si nos dirigimos a la dirección ```http://localhost:1337/App/index.html``` podemos observar todos los archivos enlazados.

<p align="center">
<img src="https://github.com/Dario95/Tec_Web_Js2016_B/blob/10-sails-02/Informe/Graficos/index.jpg?raw=true">
</p>

Todos los archivos que guardemos dentro de la carpeta `assets` se compartirán de forma pública y para acceder a ellos, solo será necesario escrbir la ruta de los archivos. De esta manera podemos agregar imágenes y demás archivos.

<p align="center">
<img src="https://github.com/Dario95/Tec_Web_Js2016_B/blob/10-sails-02/Informe/Graficos/imagen.jpg?raw=true">
</p>

Podemos ver las vistas de nuestro proyecto en la carpeta **views**.

<p align="center">
<img src="https://github.com/Dario95/Tec_Web_Js2016_B/blob/10-sails-02/Informe/Graficos/views.png?raw=true">
</p>

Se utiliza las vistas 403, 404 y 500 para especificar que se va a mostrar en caso de error.

Para crear nuevas vistas basta con crear más archivos en esta carpeta.

Crearemos las vistas Quito, Guayaquil y Cuenca.

#### Quito
```javascript
<h1>Quito</h1>
```
#### Guayaquil

```javascript
<h1>Guayaquil</h1>
```

#### Cuenca

```javascript
<h1>Cuenca</h1>
```

Para que estas vistas funcionen es necesario definir las rutas en el archivo **config/routes.js** agregando el siguiente código:

```javascript
  '/': {
    view: 'homepage'
  }, 
    '/Quito':{
        view:'quito'
        
    }, 
    '/Guayaquil':{
        view:'guayaquil'
        
    }, 
    '/Cuenca':{
        view:'cuenca'
        
    }
```

Ahora podemos observar las nuevas vistas en nuestra página:

### Quito

<p align="center">
<img src="https://github.com/Dario95/Tec_Web_Js2016_B/blob/10-sails-02/Informe/Graficos/quito.jpg?raw=true">
</p>

### Guayaquil

<p align="center">
<img src="https://github.com/Dario95/Tec_Web_Js2016_B/blob/10-sails-02/Informe/Graficos/guayaquil.jpg?raw=true">
</p>

### Cuenca

<p align="center">
<img src="https://github.com/Dario95/Tec_Web_Js2016_B/blob/10-sails-02/Informe/Graficos/cuenca.jpg?raw=true">
</p>

### Generar un controlador

Para generar un controlador se utiliza el siguiente comando:

>sails generate controller saludo

<p align="center">
<img src="https://github.com/Dario95/Tec_Web_Js2016_B/blob/10-sails-02/Informe/Graficos/controller.jpg?raw=true">
</p>

Se creará el archivo para nuestro controlador:

<p align="center">
<img src="https://github.com/Dario95/Tec_Web_Js2016_B/blob/10-sails-02/Informe/Graficos/saludocontroller.jpg?raw=true">
</p>

Modificaremos su contenido:

```javasript
module.exports = {

    hola: function (req, res) {


        var parametros = req.allParams()

        if (req.method == 'GET') {

            res.json({
                    nombre: 'hola get',
                    para:parametros
                });


        } else {

            if (req.method == 'POST') {
                res.json({
                    nombre: 'hola post'
                });
            } else {
                res.json({
                    nombre: 'hola todos'
                });
            }

        }

    },
    adios: function (req, res) {
        res.send('Adios');
    },
    hora: function (req, res) {
        res.send('Hora');
    }


};

```

Podemos verificar con el navegador o con postman:

<p align="center">
<img src="https://github.com/Dario95/Tec_Web_Js2016_B/blob/10-sails-02/Informe/Graficos/adios.jpg?raw=true">
</p>

### Método GET

<p align="center">
<img src="https://github.com/Dario95/Tec_Web_Js2016_B/blob/10-sails-02/Informe/Graficos/GetHola.jpg?raw=true">
</p>

### Método POST

<p align="center">
<img src="https://github.com/Dario95/Tec_Web_Js2016_B/blob/10-sails-02/Informe/Graficos/PostHola.jpg?raw=true">
</p>

### Método PUT

<p align="center">
<img src="https://github.com/Dario95/Tec_Web_Js2016_B/blob/10-sails-02/Informe/Graficos/GetHola.jpg?raw=true">
</p>

## Generar un Api

> sails generate api Nombre


Una Api es una función de un controlador y un modelo.

## Generar un modelo

> sails generate model Nombre

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


## Conclusiones y Recomendaciones
* Entender los conceptos básicos sobre Sails.js es muy importante para un desarrollo web de calidad.
* Se aprendió como configurar los diferentes componentes de Sails para que las páginas web sean más dinámicas.
* La documentación original de Sails es bastante completa y se recomienda su lectura para entender de mejor manera su utilización.
* El código debe mantenerse sencillo, esto permitirá que pueda ser entendido por otros.

<br>
<a href="#cabecera">A la cabecera</a>

Autor: [Homero Arias](https://github.com/Dario95/Tec_Web_Js2016_B/)

