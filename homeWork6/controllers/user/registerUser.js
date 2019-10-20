const {userService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const userToCreate = req.body;

        await userService.registerUserService(userToCreate);

        res.render('login')
    } catch (e) {
        res.json(e.message);
    }
};