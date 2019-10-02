const fs = require('fs');

function photoFunc(putPhoto, takePhoto) {

    fs.createReadStream(takePhoto).pipe(fs.createWriteStream(putPhoto));
    console.log('Yahoo');
}

module.exports = photoFunc;