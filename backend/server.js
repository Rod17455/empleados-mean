const express = require('express') // FUNCIONALIDADES DE EXPRESS
const path = require('path')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

//conexion con la base de datos de mongo
mongoose
  //.connect('mongodb://127.0.0.1:27017/empleadosds01sv22')
  .connect('mongodb+srv://rodrigotellez170602:1234@ds01.1whwi7i.mongodb.net/empleadosds01sv22?retryWrites=true&w=majority')
  .then((x)=>{

    console.log(`Conectado exitosamente a la BD: "${x.connections[0].name}"`);

  })
  .catch((err) => {
    console.log('Error al conectarse con mongoDB', err.reason)
  })

// CONFIGURACIÓN DEL SERVIDOR
const empleadoRuta = require('./routes/empleado.route') // RUTA PARA LOS ENDPOINTS
const app = express()
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
)

app.use(cors())
app.use(express.static(path.join(__dirname,'dist/empleados-mean')))
app.use('/',express.static(path.join(__dirname,'dist/empleados-mean')))
app.use('/api',empleadoRuta) // GENERA CARPETA RAIZ PARA TODAS LAS PETICIONES

//Habilitar puerto
const port = process.env.PORT || 4000
const server = app.listen(port,() =>{
  console.log('Conectado exitosamente al puerto '+port)
})

// Manejador de error 404
app.use((req,res,next) =>{
  next(createError(404))
})

//Manejo de errores
app.use(function(err,req,res,next){
  console.error(err.message)
  if(!err.statusCode) err.statusCode = 500
  res.status(err.statusCode).send(err.message)
})
