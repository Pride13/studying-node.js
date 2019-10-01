let fs = require('fs');

fs.mkdir('./jscx-1800', err => {
    if (err) {
        return console.error(err);
    }
});

fs.mkdir('./jscx-1800/Ivan Ivanov', err => {
    if (err) {
        return console.error(err);
    }
});
fs.mkdir('./jscx-2000', err => {
    if (err) {
        return console.error(err);
    }
});

fs.mkdir('./jscx-2000/Petro Petrov', err => {
    if (err) {
        return console.error(err);
    }
});

let writeStream = fs.createWriteStream('./jscx-1800/Ivan Ivanov/text.txt');
writeStream.write('I am student, my name Ivan, age 24');


let write = fs.createWriteStream('./jscx-2000/Petro Petrov/text.txt');
write.write('I am student, my name Petro, my age 26');


