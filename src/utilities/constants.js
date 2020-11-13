/**
 * @description     This module contains all the config constants.
 */
module.exports = {
    dataValidationConstants: {
        USER: {
            NAME            : { MIN_LENGTH: 5, MAX_LENGTH: 50 },
            EMAIL           : { MIN_LENGTH: 5, MAX_LENGTH: 250 }
        }
    },

    contentType: {
        JSON                : { "Content-Type": "application/json" },
        HTML                : { "Content-Type": "text/html" },
    },

    statusCode: {
        SUCCESS             : 200, // SUCCESS
        BAD_REQUEST         : 400, // INVALID DATA IN REQUEST
        UNAUTHORIZED        : 401, // ABSENCE OF TOKEN IN REQ HEADER
        FORBIDDEN           : 403, // TOKEN EXISTS, BUT INVALID[EXPIRED]
        CONFLICT            : 409, // REQUEST DATA ALREADY EXISTS IN DB
        UNPROCESSABLE_ENTITY: 422, // REQUEST DATA NOT FOUND IN DB
        SERVER_ERROR        : 500  // INTERNAL SERVER ERROR
    },

    exitCode: {
        FATAL_EXCEPTION     : 1
    },

    jwtConstants: {
        TOKEN_TIMEOUT       : 3600 // [expires for every one hour]
    },

    serverConfig: {
        PORT                : 8000
    },

    routes: {
        BASE_URL            : '/api',
        USERS               : '/users'
    },

    collectionName: {
        USER                : 'User'
    }
}