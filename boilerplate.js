//BOiler plate to create project folder index.html,style.css,script.js

const fs = require('fs');

const folderName = process.argv[2] || 'project'; //take input from user or default project
try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, '');
    fs.writeFileSync(`${folderName}/style.css`, '');
    fs.writeFileSync(`${folderName}/script.js`, '');
}
catch (e) {
    console.log("something went wrong");
    console.log(e);s
}




// console.log(fs)

// fs.mkdir('Dog', { recursive: true }, (err) => {
//     console.log("In the call back");
//     if (err) throw err;

// });
// console.log("I  come after mkdir")




// I  come after mkdir
// In the call back
// this outpush is async new folder dog created




// fs.mkdirSync('cats');
// fs.mkdirSync('cats');
// console.log("i come after sync cats")

//creates a new folder named cats using syncronous




//create a boiler plate when u run takes 1st arg as proj name[2] because first2 are bin path current file path
