const {userService, houseService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const {user_id} = req.params;

        const houses = await houseService.getAllFlatByUserId(user_id);
        const user = await userService.getById(user_id);

        user.houses = houses;

        res.json(user);
    } catch (e) {
        res.json(e.message)
    }
};