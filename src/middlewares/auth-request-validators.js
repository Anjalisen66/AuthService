const ValidateUserAuth = (req,res,next)=>{
    if(!req.body.email || !req.body.password){
        return res.status(400).json({
            success: false,
            data:{},
            message:'Something went wrong ',
            err: 'Email or password missing in the signup request '
        })
    }
    next();
}

const validateIsAdminRequest = (req,res,next) =>{
    if(!req.body.id){
        return res.status(400).json({
                success: false,
                data:{},
                message:'Something went wrong ',
                err: 'User Id is not given '
        })
    }
    next();
}

module.exports = {
    ValidateUserAuth,
    validateIsAdminRequest
}