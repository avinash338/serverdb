// npm dependency
const express               = require('express');

// function imports
const {
    addUser,
    getUsers,
    getUserByName,
    deleteUser,
    updateUser,
    getProfile,
}                           = require('../controller/users.controller');
const router                = express.Router();

/**
 * Adding the functionality of route based on the route path.
 * Authentication and Authorization has to happen before going to functionality.
 */
router.route('/').get(getUsers);
router.route('/').put(updateUser);
router.route('/me').get(getProfile);
router.route('/').post(addUser);
router.route('/:name').get(getUserByName);
router.route('/:email').delete(deleteUser);

// Default export
module.exports = router;