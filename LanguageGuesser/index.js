const franc = require('franc');
const langs = require('langs');
const colors= require('colors')

const input = process.argv[2];
const detect = franc(input);


if (detect === 'und') {
    console.log("Sorry couldn't figure try out with more sample text");
}

//console.log(franc('এটি একটি ভাষা একক IBM স্ক্রিপ্ট')) //=> 'ben'


else {
    const language = langs.where('3', detect);
console.log(`Our best guess is:${language.name.rainbow}`)

}