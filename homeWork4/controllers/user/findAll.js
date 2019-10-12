module.exports = (req, res) => {
    const usersFind = req.usersFind;

    res.json(usersFind)
};