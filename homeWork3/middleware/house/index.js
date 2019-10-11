const isFlatPresent = require('./isFlatPresent');
const checkFlatValidation = require('./checkFlatValidation');
const isUpdateFlatPresent = require('./isUpdateFlatPresent');
const checkUpdateFlatValidation = require('./checkUpdateFlatValidation');
const findAllFlatsMiddleware = require('./findAllFlats');

module.exports = {
  isFlatPresent,
  checkFlatValidation,
  isUpdateFlatPresent,
  checkUpdateFlatValidation,
  findAllFlatsMiddleware
};