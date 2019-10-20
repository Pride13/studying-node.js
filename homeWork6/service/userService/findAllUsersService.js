const dataBase = require('../../dataBase').getInstance();

module.exports = async () => {
    const UserModel = dataBase.getModel('User');

    const findAllUsers = await UserModel.findAll();

    return findAllUsers;
};