const { response, request } = require("express");
const { verify } = require("jsonwebtoken");

function validarToken(req = request, res = response, next) {
    const token = req.header("Authorization");

    try {
        if (token) {
            if (verify(token, "p3tSh0pT34m7")) {
               next()     
            }else{
                res.status(401).send({mensaje:"Token inválido"})
            }
        }else{
            res.status(401).send({mensaje: "No existe el token"})
        }

    } catch (error) {
        res.status(500).send({error, mensaje:"Hubo un error"})
    }
} 
module.exports = validarToken