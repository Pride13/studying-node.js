const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res, next) => {
    try {
        const { apartment_id } = req.params;
        const FlatModel = dataBase.getModel('House');

        const isFlatPresent = await FlatModel.findByPk(apartment_id);

        if (!isFlatPresent) {
            throw new Error(`Flat with ID ${apartment_id} is not present`)
        }

        req.flat = isFlatPresent;

        next()
    } catch (e) {
        res.status(400).json(e.message)
    }
};