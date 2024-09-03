const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((a) => Number(a));

const arr = Array.from({ length: input[0] + 1 }).fill(0);

arr[0] = 0;
arr[1] = input[1];
arr[2] = input[1] + input[2];
for (let i = 3; i < input[0] + 1; i++) {
  arr[i] = Math.max(
    arr[i - 2] + input[i],
    arr[i - 3] + input[i] + input[i - 1]
  );
}

console.log(arr[input[0]]);