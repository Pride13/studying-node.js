const fs = require('fs-extra');
const path = require('path');
const uuid = require('uuid').v1();

const dataBase = require('../../dataBase').getInstance(); //should del
// const {userService} = require('../../service');
const {emailService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const UserModel = dataBase.getModel('User'); //should del
        const userToCreate = req.body;
        const file = req.files.someTxt;

        // await userService.registerUserService(userToCreate);
        const createdUser = await UserModel.create(userToCreate);   //should del
        const createdUserId = createdUser && createdUser.dataValues && createdUser.dataValues.id;  //should del

        if (!createdUserId) {
            throw new Error('fdsfs')
        }

        const pathToUserAvatar = path.resolve(global.appRoot, 'static', 'files', 'user', `${createdUserId}`);

        fs.mkdirSync(pathToUserAvatar, {recursive: true});

        const fileExtension = file.name.split('.').pop();

        await file.mv(pathToUserAvatar + `/${uuid}.${fileExtension}`);

        // await emailService.sendEmail(userToCreate.email);

        // res.render('login')
        res.json('created')
    } catch (e) {
        res.json(e.message);
    }
};