const { flatValidator } = require('../../validator');

module.exports = (req, res, next) => {
    try {
        const flat = req.body;

        flatValidator.newUpdateFlatValidator(flat);

        next()
    } catch (e) {
        res.status(400).json(e.message)
    }
};