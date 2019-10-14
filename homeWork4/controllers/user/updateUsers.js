const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const patchUserObject = req.body;
        const { user_id } = req.params;
        const UserModel = dataBase.getModel('User');

        await UserModel.update(patchUserObject, {
            where: {
                id: user_id
            }
        });

        res.redirect(`/users/${user_id}`)
    } catch (e) {
        res.json(e.message);
    }
};