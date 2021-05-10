const jwt =require('jsonwebtoken')

module.exports=Auth=async(req,res,next)=>{
    const Authorization = req.get('Authorization');
    try {
        let user = await jwt.verify(Authorization, 'secretKEY');
        if (user) {
            req.user = user;
            return next();
        }
    } catch (error) {
        return res.status(301).json({
            status:301,
            message:'Token invalido'
        })
    }

    console.log(user);
}