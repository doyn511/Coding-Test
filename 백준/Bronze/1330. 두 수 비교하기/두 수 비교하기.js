const fs = require('fs');
const [a,b] = fs.readFileSync(0,'utf-8').toString().trim().split(' ').map((item) => +item);

if(a > b){
    console.log('>');
}else if(a < b){
    console.log('<');
}else{
    console.log('==');
}