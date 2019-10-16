const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const UserModel = dataBase.getModel('User');

        const userAuth = await UserModel.findOne({
            where: {
                email,
                password
            },
            attributes: ['id', 'name', 'email']
        });

        if (!userAuth) {
            throw new Error(`${email} doesnt exist or incorrectly entered data. Please check`)
        }

        req.user = userAuth.dataValues;

        next();
    } catch (e) {
        res.status(400).json(e.message)
    }
};