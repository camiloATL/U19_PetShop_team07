const mongoose = require("mongoose");
const ClienteModel = require("./models/cliente")

// 1 - CONEXIÓN A BASE DE DATOS
mongoose
    .connect("mongodb://localhost:27017/petshop")
    .then(() => { console.log("Se conectó a la base de datos"); })
    .catch(  ()=>{console.log("Hubo error de conexión");} )

    console.log("Conectando a la base de datos...");

// 4 - Implementar caso de usuario

const cliente1 = {
    cedula: "1032415360",
    tipoDoc: "CC",
    nombre: "Camilo Andres",
    apellido: "Torres lozano",
    telefono: "3163404877",
    password: "CamiloATL"
}
ClienteModel.create(cliente1)
    .then((respuesta)=>{
        console.log(`Se insertó el Cliente: ${respuesta.nombre}`);
    })
    .catch(()=>{
        console.log("Error al insertar Cliente");
    })