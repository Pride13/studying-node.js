const { provider } = require('../../dataBase');

module.exports = async (req, res) => {
    const { square, city, price, street } = req.body;
    const query = `insert into house(square, city, price, street) values (?, ?, ?, ?)`;

    await provider.promise().query(query, [square, city, price, street]);

    res.render('apartament')
};