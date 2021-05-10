const express=require('express')
const AuthRouter=express.Router()

// Middleware
const Auth=require('./../Middleware/Auth')
const upload =require('./../Middleware/multer')
const validateAuth=require('./../Middleware/Validation/admin.validate')
// Controlador
const control=require('./../Controllers/Auth.controller')
const Authen=new control();

AuthRouter.post('/Auth',validateAuth(),Authen.athenticateAdmin) //Crea el token
AuthRouter.post('/create',[Auth,upload.single('Imagen')],Authen.createAdmin)

module.exports=AuthRouter
