const { Router } = require("express");
const { guardarProducto, guardarImagen, verImagen, verProductos } = require("../controllers/productoControl");

const routerProducto = Router()

routerProducto.post("", guardarProducto)
routerProducto.post("/imagen", guardarImagen)
routerProducto.get("/imagen", verImagen)
routerProducto.get("/login", verProductos)

module.exports = routerProducto