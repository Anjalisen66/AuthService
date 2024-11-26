const { StatusCodes } = require('http-status-codes');
const AppError = require('./error-handler');

class ClientError extends AppError{
    constructor (name,message,explanation,statusCodes){
        super(
            name,
            message,
            explanation,
            statusCodes
        );
    }
}

module.exports = ClientError;