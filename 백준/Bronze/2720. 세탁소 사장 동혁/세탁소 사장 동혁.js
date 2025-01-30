const fs = require("fs");
let input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");
const t = +input.shift();

input = input.map((el) => +el);
const coins = [25, 10, 5, 1];

for (let price of input) {
  const changes = [0, 0, 0, 0];

  for (let i = 0; i < coins.length; i++) {
    changes[i] = Math.floor(price / coins[i]);
    price = price % coins[i];
  }

  console.log(changes.join(" "));
}
