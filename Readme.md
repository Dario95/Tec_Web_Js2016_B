# Introducción a la web

### Materia : `Tecnologías Web con JavaScript`

<p align="center">
<img src="https://www.planet-source-code.com/vb/2010Redesign/images/LangugeHomePages/HTML5_CSS_JavaScript.png" alt="Logos HTML CSS JS" title="Logos HTML CSS JS" />
</p>

### Tema : `Introducción a la Web`
### Fecha : `2016-10-25`
### Estudiante : `Homero Darío Arias Puente`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `1`

---
<a name="cabecera"></a>
## Índice de contenidos
- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marcoTeorico">Marco teórico</a>
  - <a href="#www">World Wide Web</a>
  - <a href="#nodejs">Node.js</a>
  - <a href="#navegador">Navegador</a>
  - <a href="#w3c">World Wide Web Consortium</a>
  - <a href="#metdos">Métodos HTTP</a>
  - <a href="#status">Status Code HTTP</a>
  - <a href="#w3cschools">W3C Schools</a>
  - <a href="#html">HTML</a>
  - <a href="#doctype">Doctype</a>
  - <a href="#herramientaInspeccionar">Herramienta inspeccionar</a>
  - <a href="#xml">XML</a>
  - <a href="#tags">Tags</a>
    - <a href="#cabeceras">cabeceras</a>
    - <a href="#p">p</a>
    - <a href="#ul">ul</a>
    - <a href="#ol">ol</a>
    - <a href="#li">li</a>
- <a href="#desarrolloDeLaPractica">Desarrollo de la práctica</a>
- <a href="#conclusionesYRecomendaciones">Conclusiones y recomendaciones</a>

<a name="tema"></a>
## Tema
El tema de la práctica es: `Introducción a la Web`

<a name="objetivos"></a>
## Objetivos
- Desarrollar el conocimiento Web
- Conocer los atributos de los cuales depende una página Web.
- Entender los distintos métodos utilizados en http.

<a href="#cabecera">A la cabecera</a>

<a name="marcoTeorico"></a>
## Marco teórico
<a name="www"></a>
### WWW
En informática, la World Wide Web (WWW) o red informática mundial es un sistema de distribución de documentos de hipertexto o hipermedios interconectados y accesibles vía Internet. Con un navegador web, un usuario visualiza sitios web compuestos de páginas web que pueden contener texto, imágenes, vídeos u otros contenidos multimedia, y navega a través de esas páginas usando hiperenlaces.

(Fuente: [Wikipedia](https://es.wikipedia.org/wiki/World_Wide_Web))

<a href="#cabecera">A la cabecera</a>

<a name="nodejs"></a>
### Node Js
Node.js® es una entorno de ejecución para JavaScript construido con el motor de JavaScript V8 de Chrome. Node.js usa un modelo de operaciones E/S sin bloqueo y orientado a eventos, que lo hace liviano y eficiente. El ecosistema de paquetes de Node.js, npm, es el ecosistema mas grande de librerías de código abierto en el mundo.

(Fuente: [Wikipedia](https://es.wikipedia.org/wiki/Node.js))

<a href="#cabecera">A la cabecera</a>

<a name="navegador"></a>
### Navegador web
Un navegador web (en inglés, web browser) es un software, aplicación o programa que permite el acceso a la Web, interpretando la información de distintos tipos de archivos y sitios web para que estos puedan ser visualizados.

(Fuente: [Wikipedia](https://es.wikipedia.org/wiki/Navegador_web))

<a href="#cabecera">A la cabecera</a>

<a name="w3c"></a>
### W3C
El Consorcio WWW, en inglés: World Wide Web Consortium (W3C), es un consorcio internacional que genera recomendaciones y estándares que aseguran el crecimiento de la World Wide Web a largo plazo.

(Fuente: [Wikipedia](https://es.wikipedia.org/wiki/World_Wide_Web_Consortium))

<a href="#cabecera">A la cabecera</a>

<a name="metodos"></a>
### HTTP Methods
El protocolo HTTP (The Hypertext Transfer Protocol) trabaja como un protocolo de pedido-respuesta entre el cliente y servidor.

Los métodos HTTP permiten comunicar al servidor lo que se quiere realizar con un resource bajo una URL. (Fuente: [Diego Lázaro](https://diego.com.es/metodos-http))

### Más usados
#### GET

 Pide una representación del recurso especificado. Por seguridad no debería ser usado por aplicaciones que causen efectos ya que transmite información a través de la URI agregando parámetros a la URL.


#### POST

 Envía los datos para que sean procesados por el recurso identificado. Los datos se incluirán en el cuerpo de la petición. Esto puede resultar en la creación de un nuevo recurso o de las actualizaciones de los recursos existentes o ambas cosas.



### Otros
#### HEAD
Igual que GET pero solo retorna la cabecera del HTTP y no el cuerpo del documento.

#### PUT
El método PUT te permite escribir un archivo en una conexión socket establecida con el servidor. La desventaja del método PUT es que los servidores de hosting compartido no lo tienen habilitado.

#### DELETE
Borra el recurso especificado.

#### OPTIONS
Devuelve los métodos HTTP que el servidor soporta para un URL específico. Esto puede ser utilizado para comprobar la funcionalidad de un servidor web mediante petición en lugar de un recurso específico.

#### CONNECT
 Se utiliza para saber si se tiene acceso a un host, no necesariamente la petición llega al servidor, este método se utiliza principalmente para saber si un proxy nos da acceso a un host bajo condiciones especiales.

(Fuente: [Wikipedia](https://es.wikipedia.org/wiki/Hypertext_Transfer_Protocol))

<a href="#cabecera">A la cabecera</a>

<a name="status"></a>
### Códigos HTTP
Los códigos HTTP son códigos de estado de una respuesta, el primer dígito especifica una de las cinco clases de respuesta.

#### Clases de respuesta
- 1xx Respuestas informativas
  Indica que la petición ha sido recibida y se está procesando.
- 2xx Respuestas correctas.
  Indica que la petición ha sido procesada correctamente.
- 3xx Respuestas de redirección. Indica que el cliente necesita realizar más acciones para finalizar la petición.
- 4xx Errores causados por el cliente. Indica que ha habido un error en el procesado de la petición a causa de que el cliente ha hecho algo mal.
- 5xx Errores causados por el servidor. Indica que ha habido un error en el procesado de la petición a causa de un fallo en el servidor.

(Fuente: [Wikipedia](https://es.wikipedia.org/wiki/Hypertext_Transfer_Protocol#C.C3.B3digos_de_respuesta))

<a href="#cabecera">A la cabecera</a>


<a name="w3cschools"></a>
### W3C Schools
W3Schools es un sitio de desarrolladores web, con tutoriales y referencias sobre lenguajes de desarrollo web como HTML, CSS, JavaScript, PHP, SQL y Bootstrap, que cubre la mayoría de los aspectos de la programación web.

(Fuente: [w3schools](http://www.w3schools.com/about/))

<a href="#cabecera">A la cabecera</a>

<a name="doctype"></a>
### Doctype
Una declaración de tipo de documento o DOCTYPE, es una instrucción que asocia un SGML o documento XML con una definición de tipo de documento (DTD) (por ejemplo, la definición formal de una versión particular de HTML1.0 - HTML 4.0).

En la forma serializada de un documento, este se manifiesta como una cadena corta de caracteres de marcado (markup) que se conforma con una sintaxis particular.

(Fuente: [Wikipedia](https://es.wikipedia.org/wiki/Declaraci%C3%B3n_de_tipo_de_documento))

<a href="#cabecera">A la cabecera</a>

<a name="html"></a>
### HTML
HTML, sigla en inglés de HyperText Markup Language (lenguaje de marcas de hipertexto), hace referencia al lenguaje de marcado para la elaboración de páginas web. Es un estándar que sirve de referencia del software que conecta con la elaboración de páginas web en sus diferentes versiones, define una estructura básica y un código (denominado código HTML) para la definición de contenido de una página web, como texto, imágenes, videos, juegos, entre otros.

(Fuente: [Wikipedia](https://es.wikipedia.org/wiki/HTML))

<a href="#cabecera">A la cabecera</a>


<a name="herramientaInspeccionar"></a>
### Herramienta inspeccionar
Chrome Inspector es una herramienta complementaria de desarrollo web que se usa específicamente para solucionar problemas de código de páginas web en el navegador Chrome.

(Fuente: [Google support](https://support.google.com/richmedia/answer/6062390?hl=es))


<a href="#cabecera">A la cabecera</a>

<a name="xml"></a>
### XML
XML, siglas en inglés de eXtensible Markup Language ("lenguaje de marcas Extensible"), es un meta-lenguaje que permite definir lenguajes de marcas desarrollado por el World Wide Web Consortium (W3C) utilizado para almacenar datos en forma legible.

(Fuente: [Wikipedia](https://es.wikipedia.org/wiki/Extensible_Markup_Language))

<a href="#cabecera">A la cabecera</a>

<a name="tags"></a>
### Tags
<a name="cabeceras"></a>
#### h1 - h6
Las etiquetas `<h1>` a `<h6>` son usadas para definir títulos HTML.
`<h1>` define el más importante título. `<h6>` define el título menos importante.

<a name="p"></a>
#### p
La etiqueta `<p>` define un párrafo.

Los navegadores automáticamente agregan algo de espacio (margin) antes y después de cada elemento `<p>`. Los margenes pueden ser modificados con CSS (con las propiedades de margen).

<a name="ul"></a>
#### ul
La etiqueta `<ul>` define una lista no ordenada (bulleted).

Usa la etiqueta `<ul>` junto con la etiqueta `<li>` para crear un lista no ordenada.

<a name="ol"></a>
#### ol
La etiqueta `<ol>` define  una lista ordenada. Una lista ordenada puede ser numérica o alfabética.

Usa la etiqueta `<li>` para definir una lista de elementos.

<a name="li"></a>
#### li
La etiqueta  `<li>` define un elemento de una lista.

La etiqueta `<li>` es usada para una lista ordenada `<ol>`, lista no ordenada `<ul>` y un lista de menú `<menu>`.

(Fuente: [w3schools](http://www.w3schools.com/tags/))

<a href="#cabecera">A la cabecera</a>

<a name="desarrolloDeLaPractica"></a>
## Desarrollo de la práctica
### Instalación programas necesarios
- Navegador web Chrome
- Postman Chrome plugin
- Editor Brackets
- Emmet

### Esquema HTML base
- Creación de documento html que contenga los elementos base del cuerpo de un HTML.
<p align="center">
<img src="https://github.com/LuisReinoso/Tec_Web_Js_2016_B/blob/01-HTML/Graficos/baseHTML.png?raw=true" alt="Muestra codigo base de HTML" title="base HTML"/>
</p>

  emmet `! + tab`

  mediante el uso de la herramienta inspector se puede diferenci  ar cada uno de los elementos.

  <p align="center">
  <img src="https://github.com/LuisReinoso/Tec_Web_Js_2016_B/blob/01-HTML/Graficos/inspector.png?raw=true" alt="Muestra parte de la funcionalidad de inspector" title="inspector"/>
  </p>

- Agregado estilos CSS Inline
<p align="center">
<img src="https://github.com/LuisReinoso/Tec_Web_Js_2016_B/blob/01-HTML/Graficos/cssInline.png?raw=true" alt="Muestra ejemplo de css inline" title="css inline"/>
</p>

<p align="center">
<img src="https://github.com/LuisReinoso/Tec_Web_Js_2016_B/blob/01-HTML/Graficos/cssInlineNavegador.png?raw=true" alt="Muestra ejemplo de css inline en un navegador web" title="css inline en navegador web"/>
</p>

- Agregado contenido dentro de etiqueta `<p>`
<p align="center">
<img src="https://github.com/LuisReinoso/Tec_Web_Js_2016_B/blob/01-HTML/Graficos/contenidoP.png?raw=true" alt="Muestra ejemplo de etiqueta p" title="etiqueta p"/>
</p>

<p align="center">
<img src="https://github.com/LuisReinoso/Tec_Web_Js_2016_B/blob/01-HTML/Graficos/contenidoPWeb.png?raw=true" alt="Muestra ejemplo de etiqueta p en un navegador web" title="etiqueta p en navegador web"/>
</p>

- Agregado imagen `<img>`
<p align="center">
<img src="https://github.com/LuisReinoso/Tec_Web_Js_2016_B/blob/01-HTML/Graficos/contenidoImg.png?raw=true" alt="Muestra ejemplo de etiqueta img" title="etiqueta img"/>
</p>

<p align="center">
<img src="https://github.com/LuisReinoso/Tec_Web_Js_2016_B/blob/01-HTML/Graficos/contenidoImgWeb.png?raw=true" alt="Muestra ejemplo de etiqueta img en un navegador web" title="etiqueta img en navegador web"/>
</p>

  emmet `img + tab`

- Agregado lista no ordenada `<ul>`
<p align="center">
<img src="https://github.com/LuisReinoso/Tec_Web_Js_2016_B/blob/01-HTML/Graficos/contenidoUl.png?raw=true" alt="Muestra ejemplo de etiqueta ul" title="etiqueta ul"/>
</p>

<p align="center">
<img src="https://github.com/LuisReinoso/Tec_Web_Js_2016_B/blob/01-HTML/Graficos/contenidoUlWeb.png?raw=true" alt="Muestra ejemplo de etiqueta ul en navegador web" title="etiqueta ul en navegador web"/>
</p>

  emmet `ul>li*3 + tab`

- Agregado lista ordenada `<ol>`

<p align="center">
<img src="https://github.com/LuisReinoso/Tec_Web_Js_2016_B/blob/01-HTML/Graficos/contenidoOl.png?raw=true" alt="Muestra ejemplo de etiqueta ol" title="etiqueta ol"/>
</p>

<p align="center">
<img src="https://github.com/LuisReinoso/Tec_Web_Js_2016_B/blob/01-HTML/Graficos/contenidoOlWeb.png?raw=true" alt="Muestra ejemplo de etiqueta ol en navegador web" title="etiqueta ol en navegador web"/>
</p>

  emmet `ol>li*3 + tab`

- Agregado enlace referencia `<a>`

<p align="center">
<img src="https://github.com/LuisReinoso/Tec_Web_Js_2016_B/blob/01-HTML/Graficos/contenidoA.png?raw=true" alt="Muestra ejemplo de etiqueta a" title="etiqueta a"/>
</p>

<p align="center">
<img src="https://github.com/LuisReinoso/Tec_Web_Js_2016_B/blob/01-HTML/Graficos/contenidoAWeb.png?raw=true" alt="Muestra ejemplo de etiqueta a en navegador web" title="etiqueta a en navegador web"/>
</p>

  emmet `a + tab`

- Agregado enlace a imagen `<a><img>`
<p align="center">
<img src="https://github.com/LuisReinoso/Tec_Web_Js_2016_B/blob/01-HTML/Graficos/contenidoImgEnlace.png?raw=true" alt="Muestra ejemplo de etiqueta a con img en navegador web" title="etiqueta a con img en navegador web"/>
</p>

### Postman
#### GET request
- Solicitud del primer pokemon `http://pokeapi.co/api/v2/pokemon/1/`
<p align="center">
<img src="https://github.com/LuisReinoso/Tec_Web_Js_2016_B/blob/01-HTML/Graficos/pokemonGET.png?raw=true" alt="Muestra ejemplo de solicitud GET utilizando el software postman" title="pokemon GET"/>
</p>

#### POST request
- Solicitud del primer pokemon `http://pokeapi.co/api/v2/pokemon/1/`
<p align="center">
<img src="https://github.com/LuisReinoso/Tec_Web_Js_2016_B/blob/01-HTML/Graficos/pokemonPOST.png?raw=true" alt="Muestra ejemplo de solicitud GET utilizando el software postman" title="pokemon POST"/>
</p>

<a href="#cabecera">A la cabecera</a>
<a name="conclusionesYRecomendaciones"></a>
## Conclusiones y recomendaciones
- El desarrollo de las directrices para la web se encuentra desarrollada por la W3C, la cual está precedida por el creador de la WWW, que a su vez promueve el uso de la web semántica.
- La base de la web usa el protocolo HTTP y a través de los métodos GET y POST permite interactuar con los servidores web.
- La herramientas web postman permite realizar diferentes solicitudes HTTP a un servidor web y de esta forma comprender como reacciona el servidor ante dichas solicitudes.
- El documento HMTL generado en la práctica es interpretado en el navegador web a través de las etiquetas de DOCTYPE, la cual indica el tiempo de lenguaje de marcas a ser usado.

<a href="#cabecera">A la cabecera</a>