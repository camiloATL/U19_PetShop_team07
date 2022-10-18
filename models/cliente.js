//const mongoose = require("mongoose") : Esta es una forma de importa el objeto mongoose
const { Schema, model} = require("mongoose") /*Esta es otra forma de importar mongoose pero 
                                                desestructurando el objeto */

// 1 - Crear Esquema
const clienteSchema = mongoose.Schema( {
    cedula: {Type: String, unique: true},
    tipoDoc: String,
    nombre: String,
    apellido: String,
    telefono: String,
    password: String
} )

// 2 - Crear el Modelo

ClienteModel = mongoose.model( "cliente" , clienteSchema );

module.exports = ClienteModel