const ClienteModel = require("../models/cliente") // Importa la clase cliente
const conexionDB = require("../config/database") // Importa la clase database

conexionDB() //LLama la función de ../config/database para conectarse a laDB

// test - Implementar caso de usuario

const cliente1 = {
    cedula: "19421442",
    tipoDoc: "Cédula de ciudadanía",
    nombre: "Camilo",
    apellido: "Muñoz",
    telefono: "3103165252",
    password: "Camilo123"
}
ClienteModel.create(cliente1) //Hace un "Try Catch de la inserción de un cliente a la DB"
    .then((respuesta)=>{
        console.log(`Se insertó el Cliente: ${respuesta.nombre}`);
    })
    .catch(()=>{
        console.log("Error al insertar Cliente");
    })