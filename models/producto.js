const { Schema, model} = require("mongoose");

const productoSchema = Schema({
    codigo: {type: String, unique: true},
    nombre: {type: String, required: [true, "El nombre es obligatorio"]},
    descripcion: {type: String, required: [true, "La descripción es obligatoria"]},
    marca: {type: String, required: [true, "La marca es obligatoria"]},
    cantidad: Number,
    precio: {type: Number, required: [true, "El precio es obligatorio"]},
    cliente: {
        type: Schema.Types.ObjectId, 
        ref: "cliente"
    },
},)

const productoModel = model("producto", productoSchema);

module.exports(productoModel)