const Productos = require("./productos");
const Categorias = require("./categorias");

Productos.hasMany(Categorias)

module.exports = {Productos, Categorias};