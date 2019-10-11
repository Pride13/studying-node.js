const { provider } = require('../../database');

module.exports = async (req, res, next) => {
    try {
        const query = `SELECT * FROM user`;

        const [findAll] = await provider.promise().query(query);

        if (!findAll.length) {
            throw new Error('There is no user')
        }

        req.usersFind = findAll;
        next();
    } catch (e) {
        res.status(400).json(e.message)
    }
};