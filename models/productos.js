const s = require("sequelize");
const db = require("../db");

class Productos extends s.Model{
    static noDisponibles = function(){
     return Productos.findAndCountAll({
           where: {[s.Op.or]: [{stock: 0 },{disponible: false}]}
       })
    }
};

Productos.init({
    nombre: {
        type: s.STRING,
        allowNull: false
    },
    precio: {
        type: s.FLOAT,
        allowNull: false
    } ,
    $precio: {
        type: s.VIRTUAL,
        get(){
            return "$"+this.getDataValue("precio");
        }
    },
    descripcion: {
        type: s.STRING
    } ,
    disponible: {
        type: s.BOOLEAN,
        defaultValue: true
    },
    stock: {
        type: s.INTEGER,
        allowNull: false
    }
}, {sequelize: db, modelName: "productos"});

Productos.prototype.gananciaPorStock = function(){
    return this.getDataValue("precio") * this.getDataValue("stock");
}

Productos.addHook("beforeCreate", (productos) => {
    if(!productos.disponible){
        productos.nombre += ' NO DISPONIBLE'; 
    }
})
module.exports = Productos;