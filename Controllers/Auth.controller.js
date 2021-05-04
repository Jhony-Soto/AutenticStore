const {AdminModel}=require('./../Db/User.model')
const {validationResult} = require('express-validator');

class AuthController
{
    
    async athenticateAdmin (req,res)
    {
        let admins=await AdminModel.findAll({
            attributes: ['admin_id', 'admin_document', 'admin_names', 'admin_email'],
        })
        res.json(admins)
    }

    createAdmin(req,res)
    {
        const errors = validationResult(req);
        console.log(errors)
        if (!errors.isEmpty()) {
          return res.status(422).json({
            status: false,
            error: errors.array(),
          });
        }

        console.log(req.body)
    }
}

module.exports = AuthController;