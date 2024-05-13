const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((a) => a.split(" ").map((a) => Number(a)));
const home_num = input[0][0];

for (let i = 2; i < home_num + 1; i++) {
  input[i][0] += Math.min(input[i - 1][1], input[i - 1][2]);
  input[i][1] += Math.min(input[i - 1][0], input[i - 1][2]);
  input[i][2] += Math.min(input[i - 1][1], input[i - 1][0]);
}
console.log(Math.min(...input[home_num]));