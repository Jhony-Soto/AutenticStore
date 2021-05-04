const express = require ('express') 
let app = express()


app.use('/Authentication', require('./Auth.route'));

// app.use('/dashboard', require('./dashboard.route'));

module.exports = app