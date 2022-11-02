const express = require("express");
const fileUpload = require("express-fileupload");
const routerAuth = require("../routes/auth");
const routerCliente = require("../routes/clienteRoute");
const routerProducto = require("../routes/productoRoutes");
const conexionDB = require("./database");

class Server {
  constructor() {
    this.port = 3000;
    this.app = express();

    //MIDDLEWARES
    this.app.use(express.json());
    this.app.use(fileUpload({
      useTempFiles : true,
      tempFileDir : '/tmp/'
    }))

    this.app.listen( this.port , () => {
      console.log("Se está ejecutando la app...");
    });
    this.routes();
    conexionDB();
  }

  routes() {
    this.app.use("/cliente", routerCliente);
    this.app.use("/producto", routerProducto)
    this.app.use("/auth", routerAuth)
  }
}

module.exports = Server;
