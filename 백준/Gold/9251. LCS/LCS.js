const fs = require("fs");
const [arr1, arr2] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((a) => a.split(""));

const sum = Array.from({ length: arr1.length + 1 }, (a) =>
  Array.from({ length: arr2.length + 1 }, () => 0)
);

for (let i = 1; i <= arr1.length; i++) {
  for (let j = 1; j <= arr2.length; j++) {
    if (arr1[i - 1] === arr2[j - 1]) {
      sum[i][j] = sum[i - 1][j - 1] + 1;
    } else
      sum[i][j] = sum[i - 1][j] > sum[i][j - 1] ? sum[i - 1][j] : sum[i][j - 1];
  }
}

console.log(sum[arr1.length][arr2.length]);