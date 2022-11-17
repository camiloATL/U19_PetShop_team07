const express = require("express");
const fileUpload = require("express-fileupload");
const routerAuth = require("../routes/auth");
const routerUsuario = require("../routes/usuarioRoute");
const routerProducto = require("../routes/productoRoutes");
const conexionDB = require("./database");
const cors = require("cors")
const dotenv = require("dotenv").config()
const path = require("path")

class Server {
  constructor() {
    this.port = process.env.PORT
    this.app = express();
    this.middelwares()
    
    this.app.listen( this.port , () => {
      console.log("Se está ejecutando la app...");
    });
    this.routes();
    conexionDB();
  }

  middelwares(){
    //MIDDLEWARES
    this.app.use(express.json());
    this.app.use(fileUpload({
      useTempFiles : true,
      tempFileDir : '/tmp/'
    }))
    this.app.use( cors() )
    this.app.use(express.static('public'))

  }

  routes() {
    this.app.use("/usuario", routerUsuario);
    this.app.use("/producto", routerProducto)
    this.app.use("/auth", routerAuth)
    this.app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname,"../../public/index.html"))
    })
  }
}

module.exports = Server;
