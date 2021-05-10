const express = require ('express') 
let app = express()


app.use('/Authentication', require('./Auth.route'));
app.use('/Category', require('./Category.routes'));
app.use('/Article', require('./Article.route'));


module.exports = app