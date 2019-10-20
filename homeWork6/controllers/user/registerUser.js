const {userService} = require('../../service');
const {emailService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const userToCreate = req.body;

        await userService.registerUserService(userToCreate);

        await emailService.sendEmail(userToCreate.email);

        // res.render('login')
        res.json('created')
    } catch (e) {
        res.json(e.message);
    }
};