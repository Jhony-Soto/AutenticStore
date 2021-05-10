const {ArticleModel}=require('./../Db/Article.model')

// lista de articulos que se mostrara en la lading page
const listVisit=async(req,res)=>{
    ArticleModel.findAll({
        attributes:['art_id','art_category','art_description','art_stock','art_value_venta']
    }).then(resul=>{
        return res.status(200).json({
            status:200,
            data:resul
        })
    }).catch(err=>{
        let exc='ERRR -> '+err
        return res.status(500).json({
            status:500,
            message:exc
        })
    })
}



module.exports={
    listVisit
}