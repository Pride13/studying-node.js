const users = require('./users');
const house = require('./house');
const checkAccessTokenMiddleware = require('./checkAccessTokenMiddleware');

module.exports = {
    users,
    house,
    checkAccessTokenMiddleware
};