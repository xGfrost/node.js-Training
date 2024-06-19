const fs = require ('fs');

const readStream = fs.createReadStream('./try2.txt', { encoding: 'utf8'});
const writeStream= fs.createWriteStream('./try3.txt');

// readStream.on('data', (chunk) => {
//     console.log('----- NEW CHUNK -----');
//     console.log(chunk);
//     writeStream.write('\nNEW CHUNK\n');
//     writeStream.write(chunk);
// })

//piping
readStream.pipe(writeStream);