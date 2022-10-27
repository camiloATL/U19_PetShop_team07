const express = require("express");
const routerCliente = require("../routes/clienteRoute");
const conexionDB = require("./database");

class Server {
  constructor() {
    this.port = 3000;
    this.app = express();
    this.rutas = [
      "/cliente"
    ]
    this.app.use(express.json);
    
    this.app.listen( this.port , () => {
      console.log("Se está ejecutando la app...");
    });
    this.routes();
    conexionDB();
  }

  routes() {
    this.app.use(this.rutas[0], routerCliente);
  }

  /*Esta funcion se ejecuta antes de ejecutar la ruta con: .use
  middLeware() {
    this.app.use(express.json);
  }*/
}

module.exports = Server;
