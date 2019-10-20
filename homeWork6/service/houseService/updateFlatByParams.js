const dataBase = require('../../dataBase').getInstance();

module.exports = async (updateObject, flatId) => {
    const HouseModel = dataBase.getModel('House');

    await HouseModel.update(updateObject, {
        where: {
            id: flatId
        }
    })
};