const express=require('express')
const catRouter=express.Router()

// MIDDLEWARES
const Auth=require('./../Middleware/Auth') //Token
const validateCat=require('./../Middleware/Validation/Category.validate')

// CONTROLLER
const category=require('./../Controllers/Category.controller')
const categoryController=new category()

catRouter.get('/',Auth,categoryController.listCategory)
catRouter.post('/',[Auth,validateCat()],categoryController.create)



module.exports=catRouter