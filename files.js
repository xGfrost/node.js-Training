const fs = require(`fs`);

// reading files
// fs.readFile(`./try.txt`, (err, data) => {
//     if (err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// console.log(`last line`);

//writing files
// fs.writeFile(`./try.txt`, `Hello, world`, () =>{
//     console.log(`file was written`);
// });

// fs.writeFile(`./try1.txt`, `Hello, Gfrost`, () =>{
//     console.log(`file was written`);
// });


//directories
// if(!fs.existsSync(`./assets`)){
//     fs.mkdir(`assets`, (err) => {
//         if (err){
//             console.log(err);
//         }
//         console.log(`folder created`);
//     })
// } else {
//     fs.rmdir(`./assets`, () =>{
//         if (err){
//             console.log(err)
//         }
//         console.log(`folder deleted`)
//     })
// }


//deleting files
 if (fs.existsSync(`./docs/deleteme.txt`)){
    fs.unlink(`./docs/deleteme.txt`, (err) =>{
        if(err){
            console.log(err)
        }
        console.log(`file deleted`);
    })
 }