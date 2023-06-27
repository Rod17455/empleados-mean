const express = require('express')
const app = express()
const empleadoRuta = express.Router()

//declaramos un objeto modelo
let Empleado = require('../models/Empleado')


//agregar un nuevo empleado
empleadoRuta.route('/create').post((req,res) =>{
  Empleado.create(req.body)
    .then((data) => {
      console.log('Se inserto el documento')
      res.send(data)
    })
    .catch((err) =>{
      console.log(err)
    })
})

//Obtener todos los empledos
empleadoRuta.route('/empleados').get((req,res)=>{
  Empleado.find()
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      console.log(err)
    })
})

// Obtener empleado por su id
empleadoRuta.route('/empleado/:id').get((req,res) => {
  Empleado.findById(req.params.id)
    .then((data) =>{
      res.send(data)
    })
    .catch((err) => {
      console.log(err)
    })
})

// Actualizar usuario
empleadoRuta.route('/update/:id').put((req,res) =>{
  Empleado.findByIdAndUpdate(req.params.id, {
    $set:req.body
  })
  .then((data) => {
    res.send(data)
  })
  .catch((err) => {
    console.log(err)
  })
})

// Eliminar usuario
empleadoRuta.route('/delete/:id').delete((req,res) => {
  Empleado.findByIdAndRemove(req.params.id)
    .then((data) =>{
      console.log('Se elimino el documento')
    })
    .catch((err) => {
      console.error(err)
    })
})

module.exports = empleadoRuta;
