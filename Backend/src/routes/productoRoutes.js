const { Router } = require("express");
const { guardarProducto, guardarImagen, verImagen, verProductos, actualizarProducto, eliminarProducto } = require("../controllers/productoControl");
const validarToken = require("../middlewares/auth");

const routerProducto = Router()

routerProducto.post("", [validarToken] ,guardarProducto)
routerProducto.post("/imagen", [validarToken] ,guardarImagen)
routerProducto.get("/imagen", verImagen)
routerProducto.get("", verProductos)
routerProducto.put("", actualizarProducto)
routerProducto.delete("", eliminarProducto)

module.exports = routerProducto