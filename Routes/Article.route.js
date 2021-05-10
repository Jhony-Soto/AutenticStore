const express=require('express')
const artRouter=express.Router()

// MIDDLEWARES
const Auth=require('./../Middleware/Auth') //Token
const validateArticle=require('./../Middleware/Validation/Category.validate')

// // CONTROLLER
const {listVisit}=require('./../Controllers/Article.controller')

artRouter.get('/',listVisit)
// catRouter.get('/:id',Auth,oneCategory)
// catRouter.post('/',[Auth,validateCat()],createCategory)
// catRouter.put('/:id',[Auth,validateCat()],update)
// catRouter.delete('/:id',[Auth],deleteCategory)




module.exports=artRouter