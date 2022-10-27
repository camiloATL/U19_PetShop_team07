const express = require("express"); //Importar el servicio
const routerCliente = require("../routes/clienteRoute");
const conexionDB = require("./database");

class Server {
  constructor() {
    this.app = express(); //se gurda en variable la función
    this.app.use(express.json);
    this.routes();
    this.app.listen( 3000 , () => {
      console.log("Se está ejecutando la app");
    });
    //this.middLeware();
    conexionDB();
    this.app.get('/', (req, res) => {
      res.send('Hello World!')
    })
  }

  routes() {
    this.app.use("/cliente", routerCliente);
  }

  /*Esta funcion se ejecuta antes de ejecutar la ruta con: .use
  //Dentro de la funcion hace un parse para entender o analizar el formato json
  middLeware() {
    this.app.use(express.json);
  }*/
}

module.exports = Server;
