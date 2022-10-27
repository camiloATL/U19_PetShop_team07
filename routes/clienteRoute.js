const { Router } = require("express")
const {crearCliente, getClientes, getCliente, modificarCliente, eliminarCliente} = require("../controllers/clienteControl");

const routerCliente = Router()

    routerCliente.post("", crearCliente);//RUTA PARA CREAR USUARIO
    routerCliente.get("", getClientes)//RUTA PARA LEER UN USUARIO
    routerCliente.get("/:id", getCliente) // :id haace refericia al controlador y nombre de variable q asigné
    routerCliente.put("", modificarCliente)
    routerCliente.delete("", eliminarCliente)

module.exports = routerCliente