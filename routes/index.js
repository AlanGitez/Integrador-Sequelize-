const express = require("express");
const Router = express.Router();
const productos = require("./productos")

Router.use("/productos", productos)


Router.get('/', (req, res) => res.send('Intenta acceder a /productos!'))

module.exports = Router;