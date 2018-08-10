/*
    Primero tenemos que importar las dependencias, en NodeJS para importar cualquier cosa utilizamos la sintaxis:

        let libreria_x = require('nombre_del_modulo');

    La palabra reservada "const" se refiere a una una constante.

*/

//Aquí importamos el framework express que ya habiamos instalado anteriormente con "npm install express --save"
//Todas las librerias y frameworks que instalemos con "npm" se encuentran de la carpeta "node_modules"
const express = require('express');
//Ya que importamos nuestra libreria ahora tenemos que instanciar el servidor
//Para ellos guardamos en la variable "app" una instancia de la libreria que acabamos de importar.
var app = express();

//En esta linea le decimos a nuestro servidor que utilizaremos el directorio '/public' para servir archivos estáticos,
//Estos archivos pueden ser accesables para el cliente, así que tenemos que tener cuidado de no agregar nada que comprometa la
//seguridad del servidor, regularmente ponemos aquí los archivos HTML, CSS y JS que queremos que use el cliente.
app.use(express.static('public'));

//Ahora que tenemos nuestro servidor, tenemos que definir las rutas a las que va a responder

//Con esto estamos definiendo que cuando accedamos a la ruta "/" (Que corresponde al punto de entrada del servidor EJ: localhost:8080)
//desde el método GET, que es con el que accedemos desde el navegador, nos responda con un texto.
//Observamos que tenemos  2 parámetros, uno que
app.get('/hola', (req, res) => {
    //El objeto "req" hace referencia al "request" o "peticion" que hace un cliente, comumente trae consigo información del cliente
    //que realizó la petición, como IP, puerto, url, parámetros, etc.

    //El objeto "res" es la "respuesta" que será enviada al cliente después de procesar su petición. Nosotros podemos interactuar de
    //diferentes maneras con el cliente, mandando diferentes tipos de respuestas (JSON, XML, HTML, archivos estáticos, etc)

    //En está linea respondemos al cliente con HTML con la función "res.send(string);", recordemos que usamos la palabra reservada
    //return para anular toda la futura ejecución de código después que respondamos al cliente, para evitar cualquier error.
    return res.send('<h1>Hola mundo desde la ruta /hola.</h1>');
});

//Aquí estamos definiendo una ruta POST, en este caso si tratamos de acceder desde el navegador no tendremos ninguna respuesta
//Para acceder a ella tenemos que hacer una petición por el método POST al servidor. Para ello utilizaremos el formulario que
//Está en el "index.html"
app.post('/ruta-post', (req, res) => {
    //Aquí estamos imprimiendo en la consola la IP del cliente que hace la petición al servidor, en este caso, viene dentro del objeto "req"
    console.log('IP: ', req.ip);
    return res.send('Hola mundo desde una ruta POST');
});

//Con esta linea decimos a nuestro servidor que escuche y se inicie en el puerto "8080", podemos acceder desde "http://localhost:8080"
//El segundo parámetro es una función anónima o "callback" que se ejecuta cuando se inicia el servidor,
//en este caso solamente imprimimos en la consola que el servidor de inició correctamente.
app.listen(8080, () => {
    console.log('Servidor iniciado en el puerto 8080.');
});
