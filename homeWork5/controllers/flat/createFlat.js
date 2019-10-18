const {houseService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const FlatToCreate = req.body;

        await houseService.createFlatService(FlatToCreate);

        res.json(FlatToCreate)
    } catch (e) {
        res.json(e.message);
    }
};