const sequelize=require('sequelize')
const connect=require('./connect')

const ArticleModel=connect.define('articles',{
    art_id:{
        type:sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false
    },
    art_category:{
        type:sequelize.INTEGER,
        allowNull:false
    },
    art_description:{
        type:sequelize.STRING(50),
        allowNull:false
    },
    art_stock:{
        type:sequelize.INTEGER,
        allowNull:false,
        unique: true
    },
    art_value_compra:{
        type:sequelize.INTEGER,
        allowNull:false
    },
    art_value_venta:{
        type:sequelize.INTEGER,
        allowNull:false
    },
    art_img:{
        type:sequelize.STRING,
        allowNull:true
    },
    // Timestamps
    createdAt: sequelize.DATE,
    updatedAt: sequelize.DATE,
})
// connect.sync({force:true})

module.exports={ArticleModel}