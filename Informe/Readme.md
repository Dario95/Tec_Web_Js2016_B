# NPM

### Materia : `Tecnologías Web con JavaScript`

<p align="center">
<img src="https://www.npmjs.com/static/images/npm-logo.svg" alt="Logo NPM" title="Logo NPM" />
</p>

### Tema : `NPM`
### Fecha : `2016-12-08`
### Estudiante : `Homero Darío Arias Puente`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `6`

---
<a name="cabecera"></a>
## Índice de contenidos
- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marcoTeorico">Marco teórico</a>
  - <a href="#node">Node.js</a>
  - <a href="#npm">npm</a>
- <a href="#desarrolloDeLaPractica">Desarrollo de la práctica</a>
- <a href="#conclusionesYRecomendaciones">Conclusiones y recomendaciones</a>

<a name="tema"></a>
## Tema
El tema de la práctica es: `NPM`

<a name="objetivos"></a>
## Objetivos
- Desarrollar el conocimiento básicos de JavaScript.
- Conocer la forma correcta para utilizar Node.js en el desarrollo de aplicaciones.
- Realizar un trabajo comunicario mediante el uso de npm para compartir y reutilizar código.

<a href="#cabecera">A la cabecera</a>

<a name="marcoTeorico"></a>
## Marco teórico

<a name="node"></a>
### Node.js
Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor (pero no limitándose a ello) basado en el lenguaje de programación ECMAScript, asíncrono, con I/O de datos en una arquitectura orientada a eventos y basado en el motor V8 de Google. Fue creado con el enfoque de ser útil en la creación de programas de red altamente escalables, como por ejemplo, servidores web. 
<p align="center">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2000px-Node.js_logo.svg.png" alt="Logo Node Js" title="Logo Node Js" />
</p>

(Fuente: [Wikipedia](https://es.wikipedia.org/wiki/Node.js))

<a href="#cabecera">A la cabecera</a>
<a name="npm"></a>
### NPM
´npm´ es el manejador de paquetes por defecto para Node.js, un entorno de ejecución para JavaScript .
Desde la versión 0.6.3 de Node.js npm es instalado automáticamente con el entorno. npm se ejecuta desde la linea de comandos y maneja las dependencias para una aplicación.1 2 Además, permite a los usuarios instalar aplicaciones Node.js que se encuentran en el repositorio. npm está escrito enteramente en JavaScript y fue desarrollado por Isaac Z. Schlueter a raíz de la frustración que experimentó mientras trabajando con CommonJS 

(Fuente: [Wikipedia](https://es.wikipedia.org/wiki/Npm))

<a href="#cabecera">A la cabecera</a>


<a name="Desarrollo"></a>
## Desarrollo de la práctica


1) Primero es necesario instalar Node.js. Podemos descargar Node.js desde [NodeJS](https://nodejs.org/es/).

<p align="center">
<img src="">
</p>

2) Abrir el cmd y ejecutamos el comando `node`.

<p align="center">
<img src="">
</p>

3) Ahora podemos utilizar javascript.

<p align="center">
<img src="">
</p>

4) Para salir del node es necesario utilizar *control+c* dos veces.

5) Podemos ejecutar un archivo ´.js´ con el comando ´node archivo.js´.

6) Primero crearemos un archivo ´suma.js´:


```javascript
var i = 12;
var j = 23;
console.log("hola"+(i+j));

console.log("hola"+(i+j));


  var suma= function(numero1,numero2) {
    return (numero1+numero2);
  }

console.log("Resultado"+suma(58,5));
```


7) Nos movemos a la carpeta donde está nuestro archivo js, el cuál utilizaremos para crear un paquete json. Escribimos `npm init` para crearlo.

8) Es necesario llenar la información solicitada y al final aceptamos con *yes*.
* Hay que fijarnos que el campo *main* debe contener el nombre de nuestro script.

<p align="center">
<img src="">
</p>

9) Podemos observar que se crea un archivo Json en la carpeta donde nos encontramos con la información de nuestro paquete.

<p align="center">
<img src="">
</p>

<p align="center">
<img src="">
</p>



10) Para subir paquetes al internet es necesario tener una cuenta en npm. Podemos hacerlo desde enlace [Crear cuenta npm](https://www.npmjs.com/signup) y realizamos el registro.

11) Ahora iniciamos sesión con esta cuenta. Usamos el comando `npm login` y llenamos los campos.

<p align="center">
<img src="">
</p>

12) Publicamos nuestro paquete con el comando `npm publish`.

<p align="center">
<img src="">
</p>

13) En la página web, observamos que, efectivamente, el paquete ha sido publicado.

<p align="center">
<img src="">
</p>

14) Para descargar un paquete usamos `npm i -g nombrepaquete`.
* Para una instalación global utilizaremos la opción ´-g´, y para una local, solo basta con omitirlo.
* El paquete se instalará en la carpeta mostrada en consola.

<p align="center">
<img src="">
</p>


15) Observamos que efectivamente, el paquete se ha descargado.

<p align="center">
<img src="">
</p>

16) Si se desea eliminar un paquete usamos `npm uninstall nombrepaquete`.

<br>
<a href="#Cabecera">A la cabecera</a>
