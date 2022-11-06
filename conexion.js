const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/crudapp');

const objetobd = mongoose.connection

objetobd.on('connected', () => { console.log('Conexión correcta a MongoDB') })
objetobd.on('error', () => { console.log('Error en conexión a MongoDB') })

module.exports = mongoose