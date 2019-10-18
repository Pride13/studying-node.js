const dataBase = require('../../dataBase').getInstance();

module.exports = async (whereObject) => {
    const UserModel = dataBase.getModel('User');

    await UserModel.destroy( {
        where: whereObject
    })
};
