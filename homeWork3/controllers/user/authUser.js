const { provider } = require('../../dataBase');

module.exports = async (req, res) => {
    // const {email, password} = req.body;
    //
    // const query = `insert into user (name, password) values (?, ?)`;
    // await provider.promise().query(query, [email, password]);
    // const finded = users.find(user => user.email === email && user.password === password);
    const email = req.email;

    res.json(`Congratulations, ${email}`);
};