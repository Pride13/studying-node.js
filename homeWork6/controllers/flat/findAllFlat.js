const {houseService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const findAllFlat = await houseService.findAllFlatІService();

        res.json(findAllFlat);
    } catch (e) {
        res.status(400).json(e.message)
    }
};