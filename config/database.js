//Conexión a la base de datos
const mongoose = require("mongoose");

const conexionDB = () => {
  mongoose
    .connect("mongodb://localhost:27017/petshop")
    .then(() => {
      console.log("Se conectó a la base de datos");
    })
    .catch(() => {
      console.log("Hubo error de conexión");
    });
};


module.exports = conexionDB;
