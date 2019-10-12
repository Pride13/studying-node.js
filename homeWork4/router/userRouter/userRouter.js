const router = require('express').Router();

const { user } = require('../../controllers');
const { users } = require('../../middleware');

router.post('/', users.checkUserValidation, user.registerUser);
router.get('/:user_id', users.isUserPresent, user.getById);
router.get('/', users.findAllUsersMiddleware, user.findAll);

module.exports = router;