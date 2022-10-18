const { Schema, model} = require("mongoose");

const productoSchema = Schema({
    codigo: {type: String, unique: true},
    nombre: String,
    descripcion: String,
    marca: String,
    cantidad: Number,
    precio: Number,
    cliente: {
        type: Schema.Types.ObjectId, 
        ref: "cliente"
    }
})