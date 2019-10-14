const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res, next) => {
    try {
        const { id } = req.params;
        const FlatModel = dataBase.getModel('House');

        const findAllFlat = await FlatModel.findAll();

        if (!findAllFlat) {
            throw new Error(`There are no houses with ${id} like this`)
        }

        req.houses = findAllFlat;
        next();
    } catch (e) {
        res.status(400).json(e.message)
    }
};
