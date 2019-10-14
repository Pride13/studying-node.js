const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res, next) => {
    try {
        const { id } = req.params;
        const UserModel = dataBase.getModel('User');

        const findAllMiddleWr = await UserModel.findAll();

        if (!findAllMiddleWr) {
            throw new Error(`User with ID ${id} is not present`)
        }

        req.user = findAllMiddleWr;

        next()
    } catch (e) {
        res.status(400).json(e.message)
    }
};