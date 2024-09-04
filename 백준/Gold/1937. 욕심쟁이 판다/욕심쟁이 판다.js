const fs = require("fs");
const [[n], ...forest] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((a) => a.split(" ").map((b) => Number(b)));

let arr = Array.from({ length: n }, () => Array.from({ length: n }, (a) => -1));
let max = 1;

const dirs = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

function check(i, j) {
  if (arr[i][j] === -1) {
    arr[i][j] = 0;
    for (let dir of dirs) {
      if (
        i + dir[0] >= 0 &&
        i + dir[0] <= n - 1 &&
        j + dir[1] >= 0 &&
        j + dir[1] <= n - 1 &&
        forest[i + dir[0]][j + dir[1]] > forest[i][j]
      )
        arr[i][j] = Math.max(arr[i][j], check(i + dir[0], j + dir[1]));
    }
  }
  return arr[i][j] + 1;
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    max = Math.max(max, check(i, j));
  }
}
console.log(max);
