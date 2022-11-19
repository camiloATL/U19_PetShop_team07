const { Schema, model} = require("mongoose")

const tiendaSchema = new Schema ( {
    nit: {type: String, require: [true, "El campo es obligatorio"]},
    nombre: {type: String , require: [true, "El nombre es obligatorio"]},
    lema: String,
    telefono: {type: String, require: [true, "El campo es obligatorio"]},
    direccion: {type: String, require: [true, "El campo es obligatorio"]},
    correo: {type: String, require: [true, "El campo es obligatorio"]},
    password:{type: String, require: [true, "El campo es obligatorio"]}
})

const tiendaModel = model("tienda", tiendaSchema)

module.exports = tiendaModel