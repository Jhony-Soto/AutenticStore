const express=require('express')
const AuthRouter=express.Router()

const adminValidate=require('./../Middleware/Validation/admin.validate')

// Controlador
const control=require('./../Controllers/Auth.controller')
const Authen=new control();

AuthRouter.get('/',Authen.athenticateAdmin)
AuthRouter.post('/',adminValidate(),Authen.createAdmin)

module.exports=AuthRouter