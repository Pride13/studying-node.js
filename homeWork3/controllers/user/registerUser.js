const { provider } = require('../../dataBase');

module.exports = async (req, res) => {
    try {
        const { email, name, password } = req.body;
        const query = `insert into user(name, email, password) values (?, ?, ?)`;

        await provider.promise().query(query, [name, email, password]);

        res.render('login')
    } catch (e) {
        res.json(e.message);
    }
};