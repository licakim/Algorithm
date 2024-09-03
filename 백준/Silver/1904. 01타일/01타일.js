const fs = require("fs");

const input = Number(fs.readFileSync("/dev/stdin").toString().trim());

const arr = Array.from({ length: input + 1 }).fill(0);

arr[1] = 1;
arr[2] = 2;

for (let i = 3; i < input + 1; i++) {
  arr[i] = (arr[i - 2] + arr[i - 1]) % 15746;
}

console.log(arr[input]);