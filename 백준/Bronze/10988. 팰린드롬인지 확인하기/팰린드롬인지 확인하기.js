const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("");

const str = input.join("");
const reverse = input.reverse().join("");

str === reverse ? console.log(1) : console.log(0);
