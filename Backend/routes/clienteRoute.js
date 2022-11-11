const { Router } = require("express")
const {crearCliente, getClientes, getCliente, modificarCliente, eliminarCliente} = require("../controllers/clienteControl");
const validarToken = require("../middlewares/auth");

const routerCliente = Router()

    routerCliente.post("", [validarToken] ,crearCliente);//RUTA PARA CREAR USUARIO
    routerCliente.get("", [validarToken] ,getClientes)//RUTA PARA LEER UN USUARIO
    routerCliente.get("/:id", [validarToken] ,getCliente) // :id haace refericia al controlador y nombre de variable q asigné
    routerCliente.put("", [validarToken], modificarCliente)
    routerCliente.delete("", [validarToken] ,eliminarCliente)
    
module.exports = routerCliente