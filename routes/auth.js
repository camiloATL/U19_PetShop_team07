const {Router} = require("express")
const { login } = require("../controllers/authControl")

const routerAuth = Router()

routerAuth.post("/login", login )

module.exports = routerAuth