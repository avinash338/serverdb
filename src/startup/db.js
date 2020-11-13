// npm dependency
const mongoose      = require('mongoose');
const config        = require('config');
const messages      = require('../utilities/static_messages');

/**
 * @description     This method connects the application to database.
 */
module.exports = () => {
    mongoose.connect(config.get('db'), { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log(messages.DBCONNECTION_SUCCESS_TEXT))
        .catch(err => console.log(messages.DBCONNECTION_FAILURE_TEXT, err));
}
