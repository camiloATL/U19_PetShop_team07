const mongoose = require("mongoose");
const dotenv = require('dotenv').config()
// 1. Conectarse

const conexionDB = () => {
  mongoose
    .connect(process.env.URL_DATABASE)
    .then(() => {
      console.log("Se conectó a la base de datos");
    })
    .catch(() => {
      console.log("Hubo error de conexión");
    });
};


module.exports = conexionDB;
