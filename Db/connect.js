require('./../setting/setting')
const sequelize=require('sequelize')

const connect=new sequelize(
    process.env.DB_NAME,
    process.env.USER,
    process.env.PASS,
    {
        host:process.env.HOST,
        dialect: "mysql",
    }
)

// connect
//   .authenticate()
//   .then(() => {
//     console.log('Conexion establecida.');
//   })
//   .catch(err => {
//     console.error('Error al conectarse a la BD ->:', err);
//   });

module.exports=connect