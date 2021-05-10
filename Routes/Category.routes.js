const express=require('express')
const catRouter=express.Router()

// MIDDLEWARES
const Auth=require('./../Middleware/Auth') //Token
const validateCat=require('./../Middleware/Validation/Category.validate')

// CONTROLLER
const {listCategory,
    oneCategory,
    createCategory,
    update,
    deleteCategory}=require('./../Controllers/Category.controller')

catRouter.get('/',Auth,listCategory)
catRouter.get('/:id',Auth,oneCategory)
catRouter.post('/',[Auth,validateCat()],createCategory)
catRouter.put('/:id',[Auth,validateCat()],update)
catRouter.delete('/:id',[Auth],deleteCategory)




module.exports=catRouter