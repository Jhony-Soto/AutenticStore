const {AdminModel}=require('./../Db/User.model')
const {validationResult} = require('express-validator');
const upload =require('./../Middleware/multer')
const fs =require('fs')
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken')

class AuthController
{
    
    async athenticateAdmin (req,res)
    {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({
            status: false,
            error: errors.array(),
            });
        }
        let{body}=req
        let admin=await AdminModel.findOne({
            where:{admin_email:body.Email}
        })
        if (!admin) {
            return res.status(500).json({
                status: false,
                error: 'El usuario o clave no estan registrados en la base de datos',
            });
        }
        let { admin_id,admin_names,admin_email,admin_image,admin_password}=admin
        if (!bcrypt.compareSync(body.Password, admin_password)) {

            return res.status(500).json({
            status: false,
            error: 'El usuario o clave no estan registrados en la base de datos',
            });
        }
      
        let token =jwt.sign({
            data: admin
        }, 'secretKEY', { expiresIn:60 * 60});
        
         return res.status(200).json({
            status:200,
            token:token
        })
    }

    async createAdmin (req,res)
    {

        if(req.file!=undefined){
            let newFile=__dirname+'./../public/img/admin/'+req.file.filename
            fs.rename(req.file.path,newFile,function(err){
                if (err) throw err
                try {
                    // Se guarda  el admin
                    AdminModel.create({
                        admin_document:req.body.Documento,
                        admin_names:req.body.Nombres,
                        admin_email:req.body.Email,
                        admin_password:bcrypt.hashSync(req.body.Password, 10),
                        admin_image:'/public/img/admin/'+req.file.filename
                    }).then((data)=>{
                        return res.status(201).json({
                            status:201,
                            message:'Se creo administrador correctamente.',
                            data:data.toJSON()
                        })
                    }).catch(err => {  
                        res.json(err.errors[0].message);
                    });
                } catch (error) {
                    let expc ='ERROR  -> '+error
                    res.status(500).json({
                        status:500,
                        message:expc
                    })
                }
            })
        }else{
            try {
                // Se guarda  el admin
                AdminModel.create({
                    admin_document:req.body.Documento,
                    admin_names:req.body.Nombres,
                    admin_email:req.body.Email,
                    admin_password:bcrypt.hashSync(req.body.Password, 10)
                }).then((data)=>{
                    return res.status(201).json({
                        status:201,
                        message:'Se creo administrador correctamente.',
                        data:data.toJSON()
                    })
                }).catch(err => {  
                    res.json(err.errors[0].message);
                });
            } catch (error) {
                let expc ='ERROR  -> '+error
                res.status(500).json({
                    status:500,
                    message:expc
                })
            }
            
                
            
        }

    }
    
}

module.exports = AuthController;