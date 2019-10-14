const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const FlatToCreate = req.body;
        const FlatModel = dataBase.getModel('House')

        await FlatModel.create(FlatToCreate);

        res.json(FlatToCreate)
    } catch (e) {
        res.json(e.message);
    }
};