const express = require("express"); //Importar el servicio

const crearCliente = require("../controllers/clienteControl");
const conexionDB = require("./database");

class Server {
  constructor() {
    this.port = 3000
    this.app = express(); //se gurda en variable la función
    this.app.use(express.json);
    this.routes();
    this.app.listen(this.port, () => {
      console.log("Se está ejecutando la app")
    });
    this.middLeware();
    conexionDB()
  }
  
  routes() {
    // Primer argumento es la ruta:
    //Segundo argumento es el controlador
    //RUTA PARA CREAR USUARIO
    this.app.post("/cliente", crearCliente);


    //Importante en este arquivo instalar: npm i express
    //https://github.com/expressjs/express
  }

  //Esta funcion se ejecuta antes de ejecutar la ruta con: .use
  //Dentro de la funcion hace un parse para entender o analizar el formato json
  middLeware() {
    this.app.use(express.json);
  }
}

module.exports = Server;
