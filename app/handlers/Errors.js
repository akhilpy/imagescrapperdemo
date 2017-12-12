
/**
 * Custome Errors class.
 * 
 * @class Errors
 * @extends {Error}
 */
class Errors extends Error {

    /**
     * Error message
     * @param {String} message 
     */
    constructor(message) {
        super(message);
        this._status = 500;
        this._code = 'UNKNOWN_ERROR';
        this._message = message;
    };

    sendError() {
        return {
            code: this._code,
            message: this._message,
            isError: true
        }
    }

    /**
     * Set message for error
     */
    set message(msg) {
        this._message = msg;
    }

    /**
     * Get message.
     */
    get message() {
        this._message;
    }

    /**
     * Set code.
     */
    set code(code) {
        this._code = code;
    }

    /**
     * Get Code.
     */
    get code() {
        return this._code;
    }

    /**
     * Setter http status.
     */
    set status(status) {
        this._status = status;
    }

    get status() {
        return this._status;
    }

}

module.exports = Errors;