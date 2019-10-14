const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const patchFlatObject = req.body;
        const { apartment_id } = req.params;
        const FlatModel = dataBase.getModel('House');

        await FlatModel.update(patchFlatObject, {
            where: {
                id: apartment_id
            }
        });

        res.redirect(`/apartments/${apartment_id}`)
    } catch (e) {
        res.json(e.message);
    }
};
