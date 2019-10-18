const dataBase = require('../../dataBase').getInstance();

module.exports = async (FlatToCreate)=> {
    const FlatModel = dataBase.getModel('House');

    const createFlat = await FlatModel.create(FlatToCreate);

    return createFlat;
};