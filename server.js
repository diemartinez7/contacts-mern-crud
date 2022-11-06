const express = require('express')
const app = express()

//Importar conexion mongoDB

const archivoBD = require('./conexion')

//Importar archivo de rutas y modelo usuario

const rutausuario = require('./rutas/usuario')

//Importar body parser

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: 'true' }))

app.use('/api/usuario', rutausuario)

app.get('/', (req, res) => {
    res.end('Bienvenidos al servidor backend Node.js. Corriendo...')
})

//Configurar server basico

app.listen(5000, function () {
    console.log('El servidor Node está corriendo correctamente')
})