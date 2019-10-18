const getById = require('./getById');
const updateUserByParams = require('./updateUserByParams');
const findAllUsersService = require('./findAllUsersService');
const registerUserService = require('./registerUserService');
const getUserByParams = require('./getUserByParams');
const deleteUserByParams = require('./deleteUserByParams');

module.exports = {
    getById,
    updateUserByParams,
    findAllUsersService,
    registerUserService,
    getUserByParams,
    deleteUserByParams
};