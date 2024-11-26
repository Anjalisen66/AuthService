const { StatusCodes } = require('http-status-codes');
const AppError = require('./error-handler');

class ValidationError extends AppError{
    constructor (error){
        let errorName = error.name;
        let explanation = [];
        error.errors.forEach((err)=>{
            explanation.push(err.message)
        });
        console.log("validation",error);
        super(
            errorName,
            'Not able to validate data sent in the request',
            explanation,
            StatusCodes.BAD_REQUEST
        );
    }
}

module.exports = ValidationError;