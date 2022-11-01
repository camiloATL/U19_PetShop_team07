const { Router } = require("express");
const { guardarProducto, guardarImagen } = require("../controllers/productoControl");

const routerProducto = Router()

routerProducto.post("", guardarProducto)
routerProducto.post("/imagen", guardarImagen)

module.exports = routerProducto