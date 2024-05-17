const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((a) => Number(a));
let max = 0;
for (let i = 1; i <= input[0]; i++) {
  if (max < input[i]) max = input[i];
}
const arr = Array.from({ length: max }, (a) => 0);
arr[1] = 1;
arr[2] = 2;
arr[3] = 4;

for (let i = 4; i <= max; i++)
  arr[i] = (arr[i - 1] + arr[i - 2] + arr[i - 3]) % 1000000009;
for (let i = 1; i <= input[0]; i++) console.log(arr[input[i]]);