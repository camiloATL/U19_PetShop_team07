const express = require("express");
const fileUpload = require("express-fileupload")
const routerCliente = require("../routes/clienteRoute");
const routerProducto = require("../routes/productoRoutes");
const conexionDB = require("./database");

class Server {
  constructor() {
    this.port = 3000;
    this.app = express();
    this.app.listen( this.port , () => {
      console.log("Se está ejecutando la app...");
    });
    this.routes();
    conexionDB();

    //MIDDLEWARES
    this.app.use(express.json());
    this.app.use(fileUpload({
      useTempFiles : true,
      tempFileDir : '/tmp/'
    }))
  }

  routes() {
    this.app.use("/cliente", routerCliente);
    this.app.use("/producto", routerProducto)
  }
}

module.exports = Server;
