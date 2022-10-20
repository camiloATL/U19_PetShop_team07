const express = require("express"); //Importar el servicio

class Server {
  constructor() {
    this.app = express(); //se gurda en variable la función
    this.rutas()
    this.app.listen(3000);
    this.middLeware()
  }

  rutas() {
    // Primer argumento es la ruta:
    //Segundo argumento es el controlador
    this.app.get("/", (request, response) => {
      response.send("");
    });

    this.app.post("/crear-cliente", (request, response) => {
      console.log(request.body);
      response.send(request.body);
    });
    //Importante en este arquivo instalar: npm i express
  }

    //Esta funcion se ejecuta antes de ejecutar la ruta con: .use
    //Dentro de la funcion hace un parse para entender o analizar el formato json
  middLeware(){
    this.app.use( express.json)
  }

}

module.exports = Server