const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, ' test'), (err) => {
    if(err){
        return console.log(err);
    }
    console.log('directory created sucessfuly');
});

/* open file
var fs = require('fs');
fs.open('demo.js','w',function(err , file){
    if(err) throw err;
    console.log('file opned in write mode');
});
*/

/*creat file
var fs = require('fs');
fs.writeFile('test.txt' , 'Hello wordl', function(err){
    if(err) throw err;
    console.log('file created');
});
*/

/*appened file
var fs = require('fs');
fs.appendFile('test.txt' , 'This is second line', function(err){
    if(err) throw err;
    console.log('file appeneded');
});
*/

/*rename file
var fs = require('fs');
fs.rename('test.txt' , 'renamed.txt', function(err){
    if(err) throw err;
    console.log('file renamed');
});
*/

/*delete file
var fs = require('fs');
fs.unlink('test.txt' , function(err){
    if(err) throw err;
    console.log('file deleted');
});
*/