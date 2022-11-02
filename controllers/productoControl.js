const {request, response} = require("express")
const ProductoModel = require("../models/producto")
const path = require("path")
//Intalar : npm i express-fileupload ***para poder cargar arcrivos al backend***

async function guardarImagen(req = request, res = response){

    const {productoid} = req.query

    //Get del producto
    const producto = await ProductoModel.findById(productoid)

    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ mensaje: "No se encontro el archivo" })
    }
  
    // Extrae el archivo segun el nombre (en este caso "archivo")
    const archivo = req.files.imagen
    const uploadPath = path.join(__dirname, "../imagenes/", archivo.name)
  
    // Usa el metodo mv() para colocar el archivo en cualquier parte del backend
    archivo.mv(uploadPath, (error) => {
      if (error) return res.status(500).send(error)
  
      //Carga de archivo
      producto.imagen = archivo.name
      producto.save()
      res.send("Archivo cargado corectamente")
    })
  
  }
  

  


async function guardarProducto(req = request, res = response) {

    const producto = new ProductoModel(req.body)
    await producto.save()

    res.send({ producto, mensaje:"Seguardó el producto"})
}

function verImagen(req = request, res = response) {
    
    const {nombre} = req.query
    const rutaImagen = path.join(__dirname, "../imagenes/", nombre)

    res.sendFile(rutaImagen)
}

async function verProductos(req = request, res = response) {
    const listaProductos = await ProductoModel.find()
    res.send(listaProductos)
}



module.exports = {guardarProducto, guardarImagen, verImagen, verProductos}