
class AppError  extends Error {
    constructor(message,statusCode) {
        super(message)
        this.message = message;
        this.statusCode = statusCode
        this.status = `${statusCode}`.startsWith(4)? 'Fail': 'Error';
    }
}

module.exports = AppError;