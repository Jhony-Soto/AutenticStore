require('./setting/setting') //Variables de configuracion
const express = require('express');
const app = express(); 
const corsMiddleware=require('./setting/cors')


// middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(corsMiddleware)

// recurosos estaticos
app.use(express.static(__dirname + 'public'));
app.use('/images', express.static(__dirname + '/public'));


// Archivo de todas las rutas de la app
app.use('/api',require('./Routes/index'))


app.listen(process.env.PORT, function() {
  console.log(`Escuchando el puerto ${process.env.PORT}!`);
});