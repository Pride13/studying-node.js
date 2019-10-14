const router = require('express').Router();

const { user } = require('../../controllers');
const { users } = require('../../middleware');

router.post('/', users.checkUserValidation, user.registerUser);
router.get('/:user_id', users.isUserPresent, user.getById);
router.get('/', user.findAll);
router.patch('/:user_id', users.checkUpdateUserValidation, users.isUserPresent, user.updateUsers);

module.exports = router;