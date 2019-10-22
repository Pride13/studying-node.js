const {houseService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const {apartment_id} = req.params;

        await houseService.deleteFlatService(apartment_id);

        res.json(`Ok. House by id ${apartment_id} deleted.`);
    } catch (e) {
        res.status(400).json(e.message)
    }
};