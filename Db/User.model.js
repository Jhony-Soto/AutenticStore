const sequelize=require('sequelize')
const connect=require('./connect')

const AdminModel=connect.define('administrator',{
    admin_id:{
        type:sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false
    },
    admin_document:{
        type:sequelize.STRING(10),
        allowNull:false
    },
    admin_names:{
        type:sequelize.STRING(50),
        allowNull:false
    },
    admin_email:{
        type:sequelize.STRING(50),
        allowNull:false,
        unique: true
    },
    admin_password:{
        type:sequelize.STRING,
        allowNull:false
    },
    admin_image:{
        type:sequelize.STRING,
    },
    // Timestamps
    createdAt: sequelize.DATE,
    updatedAt: sequelize.DATE,
})
// connect.sync({force:true})

module.exports={AdminModel}