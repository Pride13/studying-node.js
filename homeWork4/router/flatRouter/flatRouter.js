const router = require('express').Router();

const { flat } = require('../../controllers');
const { house } = require('../../middleware');

router.post('/', house.checkFlatValidation, flat.createFlat);
router.get('/', house.findAllFlatsMiddleware, flat.findAllFlat);
router.get('/:apartment_id', house.isFlatPresent, flat.getFlatById);
router.patch('/:apartment_id', house.checkUpdateFlatValidation, house.isFlatPresent, flat.updateFlats);

module.exports = router;