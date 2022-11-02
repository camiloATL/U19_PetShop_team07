const { request, response } = require("express");
const ProductoModel = require("../models/producto");
const path = require("path");
//Intalar : npm i express-fileupload ***para poder cargar arcrivos al backend***

async function guardarImagen(req = request, res = response) {
  const { productoid } = req.query;

  //Get del producto
  const producto = await ProductoModel.findById(productoid);

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).json({ mensaje: "No se encontro el archivo" });
  }

  // Extrae el archivo segun el nombre (en este caso "archivo")
  const archivo = req.files.imagen;
  const uploadPath = path.join(__dirname, "../imagenes/", archivo.name);

  // Usa el metodo mv() para colocar el archivo en cualquier parte del backend
  archivo.mv(uploadPath, (error) => {
    if (error) return res.status(500).send(error);

    //Carga de archivo
    producto.imagen = archivo.name;
    producto.save();
    res.send("Archivo cargado corectamente");
  });
}

async function guardarProducto(req = request, res = response) {
  
    const producto = new ProductoModel(req.body);
    await producto.save();

    res.send({ producto, mensaje: "Se guardó el producto" });
}

function verImagen(req = request, res = response) {
  const { nombre } = req.query;
  const rutaImagen = path.join(__dirname, "../imagenes/", nombre);

  res.sendFile(rutaImagen);
}

async function verProductos(req = request, res = response) {

    const { id , codigo , nombre} = req.query

    if ( id || codigo || nombre) {
        const producto = await ProductoModel.findOne({$or: [{_id: id},{codigo},{nombre}]})
        res.send(producto)
    }else{
        const listarProducto = await ProductoModel.find()
        res.send(listarProducto)
    }

}

async function actualizarProducto(req = request, res = response) {
    const {id, ...producto} = req.body
    await ProductoModel.updateOne({_id:id}, producto)
    const productoActualizado = await ProductoModel.findById(id)
    res.send(productoActualizado)

}

async function eliminarProducto(req = request, res = response) {
    const {id} = req.body
    const objEliminado = await ProductoModel.findByIdAndDelete(id)
    res.send("Producto eliminado")
}

/* function verProducto(req = request, res = response) {
    const {id} = req.params
    const producto = ProductoModel.findById({codigo: id})
    res.send(producto)

} */

module.exports = { guardarProducto, guardarImagen, verImagen, verProductos, actualizarProducto, eliminarProducto };
