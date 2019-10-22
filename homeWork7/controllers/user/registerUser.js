// const fs = require('fs-extra');
// const {resolve} = require('path');
// const uuid = require('uuid').v1();
//
// const {userService, emailService} = require('../../service');
//
// module.exports = async (req, res) => {
//     try {
//         const userToCreate = req.body;
//         const [photo] = req.photos;
//         const appRoot = global.appRoot;
//
//         const {id} = await userService.registerUserService(userToCreate);
//
//         const photoDir = `user/${id}/photo`;
//         const photoExtension = photo.name.split('.').pop();
//         const photoName = `${uuid}.${photoExtension}`;
//
//         await fs.mkdirSync(resolve(appRoot, 'public', photoDir), {recursive: true});
//
//         await photo.mv(resolve(appRoot, 'public', photoDir, photoName));
//
//         await userService.updateUserService({photo_path: `${photoDir}/${photoName}`}, id);
//
//         await emailService.sendEmail(userToCreate.email);
//
//         // res.render('login')
//         res.json('created')
//     } catch (e) {
//         res.json(e.message);
//     }
// };

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