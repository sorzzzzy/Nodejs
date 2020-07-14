var fs = require('fs');

//동기적
console.log('A');
var result = fs.readFileSync('syntax/sample.txt', 'utf-8');
console.log(result);
console.log('C');
//결과는 ABC


//비동기적
console.log('A');
fs.readFile('syntax/sample.txt', 'utf-8', function(err,result) {
    console.log(result);
});
console.log(result);
console.log('C');
//결과는 ACB
