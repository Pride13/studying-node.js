const { provider } = require('../../dataBase');

module.exports = async (req, res, next) => {
    try {
        const query = `SELECT * FROM house`;
        const [findAllFlat] = await provider.promise().query(query);

        if (!findAllFlat.length) {
            throw new Error('There are no houses')
        }

        req.houses = findAllFlat;
        next();
    } catch (e) {
        res.status(400).json(e.message)
    }
};