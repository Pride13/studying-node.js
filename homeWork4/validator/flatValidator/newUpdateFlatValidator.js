module.exports = flatObject => {
    const { city, street, square, price } = flatObject;

    if (!city || !street || !square || !price ) {
        throw new Error('Flat is not valid')
    }
};