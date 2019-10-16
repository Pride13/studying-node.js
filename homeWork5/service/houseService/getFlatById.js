const dataBase = require('../../dataBase').getInstance();

module.exports = async id => {
    const HouseModel = dataBase.getModel('House');
    const flat = await HouseModel.findByPk(id);

    return flat && flat.dataValues;
};