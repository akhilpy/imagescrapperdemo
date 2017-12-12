
const Errors = require('./Errors');

/**
 * Class to handle global errors
 * 
 * @class ErrorHandler
 * @extends {Error}
 */
class ErrorHandler extends Error {

    /**
     * Global Error handler 
     * 
     * @param {Object} err - error
     * @param {Object} req - Request object
     * @param {Object} res - Response object
     * @param {Any} next - handler.
     */
    errorHandler(err, req, res, next) {
        if (err instanceof Errors) {
            new ErrorHandler().errorResponse(err, res);
        } else {
            let error = new Errors(err.message);
            error.code = 'UNKNOWN_ERROR';   
            new ErrorHandler().errorResponse(error, res);
        }
    }

    /**
     * Response error.
     * 
     * @param {Errors} err - Instance of Errors
     * @param {Response} res - Response object
     */
    errorResponse(err, res) {
        res.status(err._status).json({
            code: err._code,
            message: err._message,
            status: err._status
        });
    }
}

module.exports = ErrorHandler;