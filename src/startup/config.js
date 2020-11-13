// npm dependency
const config          = require('config');

// constant import
const { exitCode }    = require('../utilities/constants');
const  messages       = require('../utilities/static_messages');

/**
 * @description     This method checks the config of token and exits the app if token is not present.
 */
module.exports = () => {
    if (!config.get('jwtPrivateKey')) {
        console.log(messages.FATAL_ERROR_TEXT);
        process.exit(exitCode.FATAL_EXCEPTION);
    }
}
