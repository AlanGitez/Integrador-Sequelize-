const s = require("sequelize");
const db = require("../db");

class Categorias extends s.Model{};

Categorias.init({
    nombre: s.STRING
}, {sequelize: db, modelName: "categorias"});

module.exports = Categorias;