const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const num = Number(input.splice(0, 1));

for (let i = 0; i < num; i++) {
  const arr = input.splice(0, 3);
  let coinsNum = Number(arr[0]);
  let coins = arr[1].split(" ").map((a) => Number(a));
  let sum = Number(arr[2]);
  let res = Array.from({ length: sum + 1 }).fill(0);
  res[0] = 1;
  for (let coin of coins) {
    for (let i = coin; i < sum + 1; i++) {
      res[i] += res[i - coin];
    }
  }
  console.log(res[sum]);
}
