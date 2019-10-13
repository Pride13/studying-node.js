const { provider } = require('../../dataBase');

module.exports = async (req, res) => {
    try {
        const { email, name, password } = req.body;
        const { user_id } = req.params;
        const query = `UPDATE user SET email = ?, name = ?, password = ? WHERE id = ?`;

        await provider.promise().query(query, [email, name, password, user_id]);

        res.redirect(`/users/${user_id}`)
    } catch (e) {
        res.json(e.message);
    }
};