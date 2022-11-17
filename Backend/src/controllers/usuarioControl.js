const { request, response } = require("express");
const UsuarioModel = require("../models/usuario");
const { hashSync, genSaltSync } = require("bcryptjs");

//CREAR USUARIO
async function crearUsuario(req = request, res = response) {
  const { cedula, password } = req.body;

  const usuarioEncontrado = await UsuarioModel.findOne({ cedula });

  //VALIDACIÓN SI EXISTE usuario POR CEDULA
  if (usuarioEncontrado) {
    res.status(400).send({ mensaje: "El usuario ya existe" });
  } else {
    //EL usuario NO EXISTE SE PROCEDE A CREAR Y A ENCRIPTAR CONTRASEÑA

    const passwordEncrypted = hashSync(password, genSaltSync());

    req.body.password = passwordEncrypted;

    UsuarioModel.create(req.body)
      .then((usuarioCreado) => {
        res.status(201).send({ mensaje: "Se creó el usuario", usuarioCreado });
      })
      .catch(() => {
        res.send({ mensaje: "No se creó el objeto" });
      });
  }
}

//VER  usuarioS
async function getUsuarios(req = request, res = response) {
  const { id, correo, cedula } = req.query;

  if (id || correo || cedula) {
    const usuario = await UsuarioModel.findOne({
      $or: [{ _id: id }, { correo }, { cedula }],
    });
    return res.send(usuario);
  } else {
    const usuario = await UsuarioModel.find();
    res.send(usuario);
  }

  /* let usuario;
  if (id) {
    usuario = await UsuarioModel.findById(id);
  } else {
    usuario = await UsuarioModel.find(); //Se deja vacio para encontrar totos los usuarios .find()
  }
  res.send(usuario); */
}

//VER UN usuario
async function getUsuario(req = request, res = response) {
  const { id } = req.params;
  const usuario = await UsuarioModel.find({ correo: id });

  res.send(usuario);
}

//MODIFICAR usuario
async function modificarUsuario(req = request, res = response) {
  const { id, password, ...usuario } = req.body;
  if (password) {
    const passwordEncrypted = hashSync(password, genSaltSync());
    usuario.password = passwordEncrypted;
  }
  //const obj = await UsuarioModel.findByIdAndUpdate(id, usuario ) una forma de actualizar
  await UsuarioModel.updateOne({ _id: id }, usuario);
  const usuarioModificado = await UsuarioModel.findById(id);
  res.send(usuarioModificado);
}

//ELIMINAR usuario
async function eliminarUsuario(req = request, res = response) {
  const { id } = req.body;
  const obj = await UsuarioModel.findByIdAndDelete(id);
  res.send("usuario eliminado");
}

module.exports = {
  crearUsuario,
  getUsuarios,
  getUsuario,
  modificarUsuario,
  eliminarUsuario,
};
