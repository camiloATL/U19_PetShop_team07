const express = require("express")

const routerCliente = require("../routes/cliente")
const conexionDB = require("./database")

class Server {
  constructor() {
    this.port = 3000
    this.app = express()
    this.rutas = [
      "/cliente"
    ]
    this.app.use(express.json())

    this.app.listen(this.port, () => {
      console.log("se esta ejecutando la app")
    })

    this.routes()

    conexionDB()
  }

  routes() {

    this.app.use( this.rutas[0], routerCliente )

  }
}

module.exports = Server
