const dataBase = require('../../dataBase').getInstance();

module.exports = async flatId=> {
    const FlatModel = dataBase.getModel('House');

    await FlatModel.destroy({
        where: {
            id: flatId
        }
    })
};