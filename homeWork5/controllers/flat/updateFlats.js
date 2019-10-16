const {houseService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const patchFlatObject = req.body;
        const { apartment_id } = req.params;

        await houseService.updateFlatByParams({id: apartment_id}, patchFlatObject);

        res.redirect(`/apartments/${apartment_id}`)
    } catch (e) {
        res.json(e.message);
    }
};
