const { provider } = require('../../dataBase');

module.exports = async (req, res) => {
    try {
        const {  city, street, square, price } = req.body;
        const { apartment_id } = req.params;
        const query = `UPDATE house SET city = ?, street = ?, square = ?, price = ? WHERE id = ?`;

        await provider.promise().query(query, [city, street, square, price, apartment_id]);

        res.redirect(`/apartments/${apartment_id}`)
    } catch (e) {
        res.json(e.message);
    }
};