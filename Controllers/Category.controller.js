
const {categoryModel}=require('./../Db/Categoria.model')
const {validationResult} = require('express-validator');
class categoryController
{
    // Lista catoria
    async listCategory(req,res)
    {
        categoryModel.findAll({
            attributes: ['cat_id', 'cat_nombre']
        })
            .then((resul)=>{
                res.status(200).json({
                    status:200,
                    message:'categorias',
                    data:resul
                })
            }).catch(err=>{
                let ex=err
                res.json(ex)
            })
    }

    async create(req,res)
    {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({
            status: false,
            error: errors.array(),
            });
        }
        
        categoryModel.create({
            cat_nombre:req.body.Nombre
        }).then(resul=>{
            return res.status(201).json({
                status: 201,
                message:'Categoria creada exitosamente.',
                data:resul
                });
        }).catch(err=>{
            let ex=err
            res.json(ex)
        })
    }
}

module.exports=categoryController