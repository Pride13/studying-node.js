const router = require('express').Router();

const { user } = require('../../controllers');
const { users, checkAccessTokenMiddleware } = require('../../middleware');

router.post('/', users.checkUserValidation, user.registerUser);
router.get('/:user_id', users.isUserPresent, user.getById, user.getUserWithHouseById);
router.get('/:user_id/houses', users.isUserPresent, user.getUserWithHouseById);
router.get('/', user.findAll);
router.patch('/:user_id',
    checkAccessTokenMiddleware,
    users.checkUpdateUserValidation,
    users.checkUserIdFromTokenMW,
    users.isUserPresent,
    user.updateUsers
);
router.delete('/:user_id',
    checkAccessTokenMiddleware,
    users.isUserPresent,
    users.checkUserIdFromTokenMW,
    user.deleteUsers
);

module.exports = router;