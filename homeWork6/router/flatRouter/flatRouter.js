const router = require('express').Router();

const { flat } = require('../../controllers');
const { house, checkAccessTokenMiddleware } = require('../../middleware');

router.post('/', house.checkFlatValidation, flat.createFlat);
router.get('/', flat.findAllFlat);
router.get('/:apartment_id', house.isFlatPresent, flat.getFlatById);
router.patch('/:apartment_id',
    checkAccessTokenMiddleware,
    house.checkUpdateFlatValidation,
    house.isFlatPresent,
    flat.updateFlats
);
router.delete('/:apartment_id',
    checkAccessTokenMiddleware,
    house.isFlatPresent,
    flat.deleteFlat
);

module.exports = router;