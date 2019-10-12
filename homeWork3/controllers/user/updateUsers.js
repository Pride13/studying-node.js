const { provider } = require('../../dataBase');

module.exports = async (req, res) => {
    try {
        const {id, email, name, password} = req.body;
        const query = `UPDATE user SET email = ?, name = ?, password = ? WHERE id = ${id}`;

        await provider.promise().query(query, [email, name, password]);

        res.render('updateUsers')
    } catch (e) {
        res.json(e.message);
    }
};