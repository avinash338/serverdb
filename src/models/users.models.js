// npm dependencies
const mongoose                          = require('mongoose');

// Constant import
const { collectionName }                = require('../utilities/constants');

// Creating database schema for users
const userSchema = new mongoose.Schema({
    name        : { type: String, required: true },
    email       : { type: String, required: true, unique: true }
});

// Creating a collection in mongoDB database.
const User = mongoose.model(collectionName.USER, userSchema);

// Default export.
exports.User = User;