const dataBase = require('../../dataBase').getInstance();

module.exports = async user_id => {
    const FlatModel = dataBase.getModel('House');

    const allFlatsByUserId = await FlatModel.findAll({
        where: {
            user_id
        }
    });

    return allFlatsByUserId;
};