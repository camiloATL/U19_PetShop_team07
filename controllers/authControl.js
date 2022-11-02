const { request, response } = require("express");
const ClienteModel = require("../models/cliente");
const { compareSync } = require("bcryptjs");
const { sign } = require("jsonwebtoken");

async function login(req = request, res = response) {
  const { correo, password } = req.body;

  //Buscar cliente
  const cliente = await ClienteModel.findOne({ correo });

  if (cliente) {
    //Valida si las contraseñas son iguales
    if (compareSync(password, cliente.password)) {
      sign({ id: cliente.id }, "p3tSh0pT34m7", (err, token) => {
        if (err) {
          res.status(500).send({ menasaje: "Hubo un error" });
        } else {
          res.send({ auth: true, token });
        }
      });
    }
  } else {
    res.status(400).send({ mesanje: "El Usuario NO existe" });
  }
}

module.exports = { login };
