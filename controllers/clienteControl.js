const { request, response } = require("express");
const ClienteModel = require("../models/cliente");

async function crearCliente(req = request, res = response) {
  const { cedula } = req.body;

  const clienteEncontrado = await ClienteModel.findOne({cedula});

  if (clienteEncontrado) {
    res.status(400).send({ mensaje: "El cliente ya existe" });
  } else {
    ClienteModel.create(req.body)
      .then((clienteCreado) => {
        res.send({ mensaje: "Se creó el cliente", clienteCreado });
      })
      .catch(() => {
        res.send({ mensaje: "No se creó el objeto" });
      });
  }
}

async function getClientes(req = request, res = response) {
  const { id } = req.query;
  let cliente;
  if (id) {
    cliente = await ClienteModel.findById(id);
  } else {
    cliente = await ClienteModel.find(); //Se deja vacio para encontrar totos los clientes .find()
  }
  res.send(cliente);
}

async function getCliente(req = request, res = response) {
  const { id } = req.params;
  const cliente = await ClienteModel.findById(id);

  res.send(cliente);
}

async function modificarCliente(req = request, res = response) {
    
    const {_id, ...cliente} = req.body

    console.log(cliente);

    //const obj = await ClienteModel.findByIdAndUpdate(id, cliente ) una forma de actualizar
    await ClienteModel.uddateOne( {_id: id}, cliente )
    const clienteModificado = ClienteModel.findById(id)
    res.send(clienteModificado)
}

async function eliminarCliente(req = request, res = response) {
    
const {id} = req.body

await ClienteModel.findByIdAndDelete(id)

}

module.exports = { crearCliente, getClientes, getCliente , modificarCliente, eliminarCliente};
