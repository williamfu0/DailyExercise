import thenFs from 'then-fs'
thenFs.readFile('./files/11.txt', 'utf-8')
    .then((r1) => {
        console.log(r1);
        return thenFs.readFile('./files/2.txt', 'utf-8')
    })

    .then((r2) => {
        console.log(r2);
        return thenFs.readFile('./files/3.txt', 'utf-8')
    })
    .catch(err => { console.log(err.message); })
    .then((r3) => {
        console.log(r3);
        return thenFs.readFile('./files/4.txt', 'utf-8')
    }).then((r4) => {
        console.log(r4);
    })
