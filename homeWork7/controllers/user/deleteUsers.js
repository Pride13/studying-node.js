const {userService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const { user_id } = req.params;

        await userService.deleteUserByParams({id: user_id});

        res.json('Ok, you are delete')
    } catch (e) {
        res.json(e.message);
    }
};