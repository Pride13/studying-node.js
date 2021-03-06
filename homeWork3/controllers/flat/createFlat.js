const { provider } = require('../../dataBase');

module.exports = async (req, res) => {
    try {
        const { square, city, price, street } = req.body;
        const query = `insert into house(square, city, price, street) values (?, ?, ?, ?)`;

        await provider.promise().query(query, [square, city, price, street]);

        res.render('apartament')
    } catch (e) {
        res.json(e.message);
    }
};