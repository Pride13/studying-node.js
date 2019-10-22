const {userService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const findAll = await userService.findAllUsersService();

        res.json(findAll);
    } catch (e) {
        res.status(400).json(e.message)
    }
};
