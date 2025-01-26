const fs = require("fs");
const str = fs.readFileSync(0).toString().trim();

const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
const answer = new Array(ALPHABET.length).fill(0);

str.split("").forEach((s) => {
  let idx = ALPHABET.indexOf(s);
  answer[idx]++;
});

console.log(answer.join(" "));
