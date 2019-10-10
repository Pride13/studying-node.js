module.exports = userObject => {
    const { id, email, name, password} = userObject;

    if (!id || !email || !password || !name ) {
        throw new Error('User is not valid')
    }
};