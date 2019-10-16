module.exports = flatObject => {
    const { square, city, price, street } = flatObject;
    
    if (!square || !city || !price || !street) {
        throw new Error('Flat object is not valid')
    }
};