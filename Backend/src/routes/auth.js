const {Router} = require("express")
const { login, validarJWT } = require("../controllers/authControl")
const validarToken = require("../middlewares/auth")

const routerAuth = Router()

routerAuth.post("/login", login )
routerAuth.get("/verify", [validarToken], validarJWT )

module.exports = routerAuth