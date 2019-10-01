// let fs = require('fs');
//
// function student(group, name, data) {
//     fs.mkdir(`./${group}/${name}`, err => {
//         if (!err ) {
//             console.log('ok');
//         }
//     });
//     fs.writeFile(`./${group}/${name}/file.txt`, data, err => {
//         if (!err) {
//             console.log('ok2');
//         }
//     })
// }
// module.exports = student;

let fs = require('fs');

function students(group, name, data) {
    fs.mkdir(`./${group}/${name}`, err => {
        if (!err) {
            console.log('Ok');
        }
    });
    fs.writeFile(`./${group}/${name}/text.txt`, data, err => {
        if (!err) {
            console.log('Nice');
        }
    });
}

module.exports = students;