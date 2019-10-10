module.exports = flatObject => {
    const { id, city, street, square, price } = flatObject;

    if (!id || !city || !street || !square || !price ) {
        throw new Error('Flat is not valid')
    }
};