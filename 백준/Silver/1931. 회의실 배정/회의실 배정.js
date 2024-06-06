const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((a) => a.split(" ").map((b) => Number(b)));

const N = input[0][0];
input.splice(0, 1);
input.sort((a, b) => a[1] - b[1]);
input.sort((a, b) => {
  if (a[1] == b[1]) return a[0] - b[0];
});

let answer = 0;
let i = 0;
while (1) {
  end = input[i][1];
  answer++;
  let check = 0;
  for (let j = i + 1; j < N; j++) {
    if (end <= input[j][0]) {
      i = j;
      check = 1;
      break;
    }
  }
  if (check == 0) break;
}

console.log(answer);
