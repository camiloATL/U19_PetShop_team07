//const mongoose = require("mongoose") : Esta es una forma de importa el objeto mongoose
const { Schema, model} = require("mongoose") /*Esta es otra forma de importar mongoose pero 
                                                desestructurando el objeto */

// 1 - Crear Esquema
const clienteSchema = Schema( {
    cedula: {type: String, unique: true},
    tipoDoc: {type: String, enum: ["Cédula de ciudadanía","Pasaporte","Tarjeta de identidad","Número de extrangería"]},
    nombre: {type: String, required: [true, "El nombre es obligatorio"]},
    apellido: {type: String, required: [true, "El apellido es obligatorio"]},
    telefono: String,
    password: String
} )

// 2 - Crear el Modelo

const ClienteModel = model( "cliente" , clienteSchema );

module.exports = ClienteModel