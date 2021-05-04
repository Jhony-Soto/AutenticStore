require('./setting')
const cors =require('cors');

if(process.env.ENV=="test"){
    var corsOptions = {
        origin:'*', 
    }
}else{
    var whitelist = ['http://example1.com', 'http://example2.com']
    var corsOptions = {
      origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
          callback(null, true)
        } else {
          callback(new Error('Not allowed by CORS'))
        }
      }
    }
}

module.exports=cors(corsOptions)