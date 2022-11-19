const { Schema, model} = require("mongoose");

const productoSchema = new Schema({
    codigo: Number,//{type: Number, unique: true},
    nombre: String, //{type: String, required: [true, "El nombre es obligatorio"]},
    descripcion: String, //{type: String, required: [true, "La descripción es obligatoria"]},
    marca: String, //{type: String, required: [true, "La marca es obligatoria"]},
    cantidad: Number,
    precio: Number,//{type: Number, required: [true, "El precio es obligatorio"]},
    categoria: String, //{type: String, enum: ["Gatos","Perros","Otros"]},
    imagen: String,
    tamaño: String,
    vendedor: {
        type: Schema.Types.ObjectId,
        ref: "usuario"
    }
},)

const ProductoModel = model("producto", productoSchema);

module.exports = ProductoModel