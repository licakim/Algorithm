const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((a) => a.split(" ").map((b) => Number(b)));

const [N, S] = input[0];
let answer = 0;

function find(k, sum, arr) {
  if (sum === S && arr.length) {
    answer++;
  }
  for (let i = k; i < N; i++) {
    arr.push(input[1][i]);
    find(i + 1, sum + input[1][i], arr);
    arr.pop(input[1][i]);
  }
}

find(0, 0, []);

console.log(answer);