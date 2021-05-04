const express = require('express');
const app = express(); 
const corsMiddleware=require('./setting/cors')

require('./setting/setting') //Variables de configuracion

// middleware
app.use(express.json())
app.use(corsMiddleware)

// Archivo de todas las rutas de la app
app.use('/api',require('./Routes/index'))


app.listen(process.env.PORT, function() {
  console.log(`Escuchando el puerto ${process.env.PORT}!`);
});