const fs = require('fs');

const createFunction = require('./functions');

const createPhoto = require('./Photo');

fs.mkdir('./jscx-1800', err => {

   if (!err) {
       console.log('Good');
   }
});

fs.mkdir('./jscx-2000', err => {

    if (!err) {
        console.log('Very Good');
    }
});

createFunction('jscx-1800', 'Ivan Andre', 'Hello');
createFunction('jscx-2000', 'Roman Deciv', 'Hello');
createPhoto('./jscx-1800/Ivan Andre/Foto.jpg','../Foto/jpg1.jpg');
createPhoto('./jscx-2000/Roman Deciv/Foto.jpg','../Foto/jpg2.jpg');

