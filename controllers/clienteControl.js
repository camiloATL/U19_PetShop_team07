const { request, response } = require("express");
const ClienteModel = require("../models/cliente");
const {hashSync, genSaltSync} = require("bcryptjs");


//CREAR CLIENTE
async function crearCliente(req = request, res = response) {
  const { cedula, password } = req.body;

  const clienteEncontrado = await ClienteModel.findOne({cedula});

  //VALIDACIÓN SI EXISTE CLIENTE POR CEDULA
  if (clienteEncontrado) {
    res.status(400).send({ mensaje: "El cliente ya existe" });
  } else {

    //EL CLIENTE NO EXISTE SE PROCEDE A CREAR Y A ENCRIPTAR CONTRASEÑA
    
    const passwordEncrypted = hashSync( password , genSaltSync())

    req.body.password = passwordEncrypted

    ClienteModel.create(req.body)
      .then((clienteCreado) => {
        res.send({ mensaje: "Se creó el cliente", clienteCreado });
      })
      .catch(() => {
        res.send({ mensaje: "No se creó el objeto" });
      });
  }
}


//VER  CLIENTES
async function getClientes(req = request, res = response) {
  const { id , correo , cedula} = req.query;

    if(id || correo || cedula){
    const cliente = await ClienteModel.findOne({$or: [{_id: id},{correo},{cedula}]});
    return res.send(cliente)
    }else{
      const cliente = await ClienteModel.find()
      res.send(cliente)
    }

  /* let cliente;
  if (id) {
    cliente = await ClienteModel.findById(id);
  } else {
    cliente = await ClienteModel.find(); //Se deja vacio para encontrar totos los clientes .find()
  }
  res.send(cliente); */
}

//VER UN CLIENTE
async function getCliente(req = request, res = response) {
  const { id } = req.params;
  const cliente = await ClienteModel.findById(id);

  res.send(cliente);
}

//MODIFICAR CLIENTE
async function modificarCliente(req = request, res = response) {
    
    const {id, password,  ...cliente} = req.body
  if (password) {
    const passwordEncrypted = hashSync( password , genSaltSync())
    cliente.password = passwordEncrypted
  }
    //const obj = await ClienteModel.findByIdAndUpdate(id, cliente ) una forma de actualizar
    await ClienteModel.updateOne( {_id: id}, cliente )
    const clienteModificado = await ClienteModel.findById(id)
    res.send(clienteModificado)
}


//ELIMINAR CLIENTE
async function eliminarCliente(req = request, res = response) {
    
const {id} = req.body

await ClienteModel.findByIdAndDelete(id)

}

module.exports = { crearCliente, getClientes, getCliente , modificarCliente, eliminarCliente};
