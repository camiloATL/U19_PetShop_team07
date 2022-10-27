const { Router } = require("express")
const {crearCliente, getClientes, getCliente, modificarCliente, eliminarCliente} = require("../controllers/clienteControl");

const routerCliente = Router()

    routerCliente.post("/cliente", crearCliente);//RUTA PARA CREAR USUARIO
    routerCliente.get("/clientes", getClientes)//RUTA PARA LEER UN USUARIO
    routerCliente.get("/cliente/:id", getCliente) // :id haace refericia al controlador y nombre de variable q asigné
    routerCliente.put("/cliente",modificarCliente)
    routerCliente.delete("/cliente", eliminarCliente)

module.exports = routerCliente