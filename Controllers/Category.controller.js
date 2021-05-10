const {categoryModel}=require('./../Db/Categoria.model')
const {validationResult} = require('express-validator');

    // Lista catoria
    const listCategory=async(req,res)=>{
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

    // Una categoria
    const oneCategory=async(req,res)=>{
        let idCat=req.params.id
        let cat=await getOneCategory(idCat)
        if(!cat){
            return res.status(200).json({
                status:200,
                message:`La categoria con el id ${idCat} no existe en nuestra Base de datos.`
            })
        }else{
            return res.status(200).json({
                status:200,
                data:{cat_id:cat.cat_id,cat_nombre:cat.cat_nombre}
            })
        }
        // res.json(cat)
        console.log(cat);
    }

    function getOneCategory(idCat){
        return new Promise((resolve,reject)=>{
            categoryModel.findByPk(idCat).then(resul=>{
                resolve(resul)
            }).catch(err=>{
                reject(err)
            })
         })
    }
   

    // crear
    const createCategory=async(req,res)=>{
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

    // actualizar
    const update=async(req,res)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({
            status: false,
            error: errors.array(),
            });
        }

        let idCat=req.params.id
        let resul= await getOneCategory(idCat)
        if(!resul){
            return res.status(200).json({
                status:200,
                message:`La categoria con el id ${idCat} no existe en nuestra Base de datos.`
            })
        }

        let data={
            cat_nombre:req.body.Nombre
        } 
        categoryModel.update (data, {
            where: {
                cat_id: idCat,
            },
          }).then(resul=>{
            return res.status(202).json({
                status: 202,
                message:'Categoria actualizada exitosamente.'
            });
        }).catch(err=>{
            console.log(err);
            let ex='ERRROR ->'+err
            res.json(ex)
        })
    }

    const deleteCategory=async (req,res)=>{
        
        let idCat=req.params.id
        let resul= await getOneCategory(idCat)
        if(!resul){
            return res.status(200).json({
                status:200,
                message:`La categoria con el id ${idCat} no existe en nuestra Base de datos.`
            })
        }

        categoryModel.destroy({where:{cat_id:idCat}})
            .then(resul=>{
                return res.status(200).json({
                    status:200,
                    message:`Se elimino la categoria correctamente.`
                })
            }).catch(err=>{
                let exc='ERR->'+err
                return res.status(500).json({
                    status:500,
                    message:exc
                })
            })

    }

    


module.exports={
    listCategory,
    oneCategory,
    createCategory,
    update,
    deleteCategory
}