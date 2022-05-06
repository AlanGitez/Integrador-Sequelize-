const express = require("express");
const Router = express.Router();
const {Productos} = require("../models") 

Router.get("/", (req,res,next) => {
    Productos.findAll()
    .then(productos => {
        res.status(200).send(productos);
    })
    .catch(err => next(err));
})

Router.get("/:id", (req,res,next) => {
    Productos.findOne({where: {id:req.params.id}})
    .then(producto => {
        res.status(200).send(producto);
    })
    .catch(err => next(err));
})

Router.delete("/:id", (req,res,next) => {
    let productToRemove;
    Productos.findOne({where: {id:req.params.id}})
    .then(producto => {
        productToRemove = producto;
        return Productos.destroy({where: {id:req.params.id}})
    })
    .then(()=> res.status(200).send(productToRemove))
    .catch(err => next(err));
})

Router.put("/:id", (req,res,next) => {
    Productos.update(req.body, {where :{id:req.params.id}})
    .then(page => res.status(201).send(page))
    .catch(err => next(err));
})

Router.post("/", (req,res,next) => {
    Productos.create(req.body)
    .then(producto => res.status(201).send(producto))
    .catch(err => next(err));
})





module.exports = Router;
