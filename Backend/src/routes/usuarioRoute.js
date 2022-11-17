const { Router } = require("express");
const {
  crearUsuario,
  getUsuarios,
  getUsuario,
  modificarUsuario,
  eliminarUsuario,
} = require("../controllers/usuarioControl");
const validarToken = require("../middlewares/auth");

const routerUsuario = Router();

routerUsuario.post("", crearUsuario); //RUTA PARA CREAR USUARIO
routerUsuario.get("", [validarToken], getUsuarios); //RUTA PARA LEER UN USUARIO
routerUsuario.get("/:id", [validarToken], getUsuario); // :id haace refericia al controlador y nombre de variable q asigné
routerUsuario.put("", [validarToken], modificarUsuario);
routerUsuario.delete("", [validarToken], eliminarUsuario);

module.exports = routerUsuario;
