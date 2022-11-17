const { request, response } = require("express");
const UsuarioModel = require("../models/usuario");
const { compareSync } = require("bcryptjs");
const { sign } = require("jsonwebtoken");

async function login(req = request, res = response) {
  const { correo, password } = req.body;

  //Buscar usuario
  const usuario = await UsuarioModel.findOne({ correo });

  if (usuario) {
    //Valida si las contraseñas son iguales
    if (compareSync(password, usuario.password)) {

      //Se crea y se envía el token
      sign({ id: usuario.id }, "p3tSh0pT34m7", {expiresIn: "5h"} ,(err, token) => {
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

function validarJWT(req, res) {
  res.status(200).send({auth:true})
}

module.exports = { login , validarJWT};
