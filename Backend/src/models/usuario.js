//const mongoose = require("mongoose") : Esta es una forma de importa el objeto mongoose
const { Schema, model} = require("mongoose") /*Esta es otra forma de importar mongoose pero 
                                                desestructurando el objeto */

// 1 - Crear Esquema
const usuarioSchema = Schema( {
    cedula: String,//{type: String, unique: true},
    tipoDoc: String,//{type: String, enum: ["Cédula de ciudadanía","Pasaporte","Tarjeta de identidad","Número de extrangería"]},
    nombre: String,//{type: String, required: [true, "El nombre es obligatorio"]},
    apellido: String,//{type: String, required: [true, "El apellido es obligatorio"]},
    telefono: String,
    correo: String,
    password: String,
    tipo: {type: String, 
    enum: ["CLIENTE","ADMIN", "VENDEDOR"]
    }
} )

// 2 - Crear el Modelo

const UsuarioModel = model( "usuario" , usuarioSchema ); // El String es el nombre de la colección

module.exports = UsuarioModel