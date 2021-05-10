const sequelize=require('sequelize')
const connect=require('./connect')

const categoryModel=connect.define('category',{
    cat_id:{
        type:sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false
    },
    cat_nombre:{
        type:sequelize.STRING,
        allowNull:false
    },
   
    // Timestamps
    createdAt: sequelize.DATE,
    updatedAt: sequelize.DATE,
})
// connect.sync({force:true})

module.exports={categoryModel}