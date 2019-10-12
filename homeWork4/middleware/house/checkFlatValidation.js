const { flatValidator } = require('../../validator');

module.exports = (req, res, next) => {
    try {
        const flat = req.body;

        flatValidator.newFlatValidator(flat);

        next()
    } catch (e) {
        res.json(400).json(e.message)
    }
};