const {houseService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const FlatToCreate = req.body;
        const {} = req.user;

        Object.assign(FlatToCreate, {user_id: id});
        await houseService.createFlatService(FlatToCreate);

        res.json(FlatToCreate)
    } catch (e) {
        res.json(e.message);
    }
};