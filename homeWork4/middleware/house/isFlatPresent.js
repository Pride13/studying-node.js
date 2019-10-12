const { provider } = require('../../dataBase');

module.exports = async (req, res, next) => {
    try {
        const { apartment_id } = req.params;
        const query = `select * from house where id = ${apartment_id}`;
        const [isFlatPresent] = await provider.promise().query(query);

        if (!isFlatPresent.length) {
            throw new Error(`Flat with ID ${apartment_id} are not present`)
        }

        req.flat = isFlatPresent;

        next()
    } catch (e) {
        res.status(400).json(e.message)
    }
};