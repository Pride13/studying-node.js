module.exports = (req, res) => {
    const flat = req.flat;

    res.json(flat);
};