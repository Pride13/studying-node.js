const registerUser = require('./registerUser');
const findAll = require('./findAll');
const getById = require('./getById');
const updateUsers = require('./updateUsers');
const deleteUsers = require('./deleteUsers');
const getUserWithHouseById = require('./getUserWithHouseById');

module.exports = {
    registerUser,
    findAll,
    getById,
    updateUsers,
    deleteUsers,
    getUserWithHouseById
};