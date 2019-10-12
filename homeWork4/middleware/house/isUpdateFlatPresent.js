const { provider } = require('../../dataBase');

module.exports = async (req, res, next) => {
    try {
        const {id} = req.body;
        const query =  `select * from house where id = ${id}`;

        const [isFlatPresent] = await provider.promise().query(query);

        if (!isFlatPresent.length) {
            throw new Error(`Flat with ID ${id} is not present`)
        }

        next()
    } catch (e) {
        res.status(400).json(e.message)
    }
};