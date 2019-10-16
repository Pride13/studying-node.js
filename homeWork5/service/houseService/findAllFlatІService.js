const dataBase = require('../../dataBase').getInstance();

module.exports = async () => {
  const FlatModel = dataBase.getModel('House');

  const findAllFlat = await FlatModel.findAll();

  return findAllFlat;
};