// npm dependency
const Joi                           = require('joi');

// constant imports
const { dataValidationConstants }   = require('./constants');

/**
 * @description     This module contains the validation schemas which is used for validating the user input. 
 */
module.exports = {

    addUserSchema: {
        name: Joi
            .string()
            .required()
            .min(dataValidationConstants.USER.NAME.MIN_LENGTH)
            .max(dataValidationConstants.USER.NAME.MAX_LENGTH),
        email: Joi
            .string()
            .required()
            .email()
            .min(dataValidationConstants.USER.EMAIL.MIN_LENGTH)
            .max(dataValidationConstants.USER.EMAIL.MAX_LENGTH)
    },

    updateUserSchema: {
        name: Joi
            .string()
            .required()
            .min(dataValidationConstants.USER.NAME.MIN_LENGTH)
            .max(dataValidationConstants.USER.NAME.MAX_LENGTH),
        email: Joi
            .string()
            .required()
            .email()
            .min(dataValidationConstants.USER.EMAIL.MIN_LENGTH)
            .max(dataValidationConstants.USER.EMAIL.MAX_LENGTH),
    },
}