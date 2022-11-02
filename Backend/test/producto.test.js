const conexionDB = require("../config/database");
const ProductoModel = require("../models/producto")
const {Schema} = require("mongoose")

conexionDB()

const producto1 = {
    codigo: "1010",
    nombre: "Mi mascota",
    descripcion: "Comida para gatos",
    marca: "Catshow",
    cantidad: 20,
    precio: 20000,
}

ProductoModel.create(producto1)
    .then( (respuesta)=>{
        console.log("Se ha insertado el producto " + respuesta.nombre);
    } )
    .catch( ()=>{
        console.log("Error al insertar el producto");
    } )