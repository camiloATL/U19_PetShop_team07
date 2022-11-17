const express = require("express");
const fileUpload = require("express-fileupload");
const routerAuth = require("../routes/auth");
const routerUsuario = require("../routes/usuarioRoute");
const routerProducto = require("../routes/productoRoutes");
const conexionDB = require("./database");
const cors = require("cors")

class Server {
  constructor() {
    this.port = 3001;
    this.app = express();

    //MIDDLEWARES
    this.app.use(express.json());
    this.app.use(fileUpload({
      useTempFiles : true,
      tempFileDir : '/tmp/'
    }))
    this.app.use( cors() )

    this.app.listen( this.port , () => {
      console.log("Se está ejecutando la app...");
    });
    this.routes();
    conexionDB();
  }

  routes() {
    this.app.use("/usuario", routerUsuario);
    this.app.use("/producto", routerProducto)
    this.app.use("/auth", routerAuth)
  }
}

module.exports = Server;
