const { provider } = require('../../dataBase');

module.exports = async (req, res) => {
    const { id, city, street, square, price } = req.body;
    const query = `UPDATE house SET city = ?, street = ?, square = ?, price = ? WHERE id = ${id}`;

    await provider.promise().query(query, [city, street, square, price]);

    res.render('updateFlat')
};