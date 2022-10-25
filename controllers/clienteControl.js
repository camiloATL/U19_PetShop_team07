const express = require("express");
const ClienteModel = require("../models/cliente");

async function crearCliente(
  request = express.request,
  response = express.response
) {
  const { cedula } = response.body;

  const clienteEncontrado = await ClienteModel.findOne({
    cedula: request.body.cedula,
  });

  if (clienteEncontrado) {
    response.send({ mensaje: "El cliente ya existe" });
  } else {
    ClienteModel.create(request.body)
      .then((clienteCreado) => {
        response.send({ mensaje: "Se creó el cliente", clienteCreado });
      })
      .catch(() => {
        response.send({ mensaje: "No se creó el objeto" });
      });
  }
}
module.exports = crearCliente;
