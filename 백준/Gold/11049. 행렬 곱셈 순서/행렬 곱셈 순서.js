const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((a) => a.split(" ").map((a) => Number(a)));

const num = input[0][0];
const sum = Array.from({ length: num + 1 }, (a) =>
  Array.from({ length: num + 1 }, (a) => 0)
);

for (let i = 1; i < num; i++) {
  sum[i][i + 1] = input[i][0] * input[i][1] * input[i + 1][1];
}

for (let i = 2; i < num; i++) {
  for (let j = 1; j <= num - i; j++) {
    let dest = j + i;
    sum[j][dest] = Infinity;
    for (let k = j; k < dest; k++) {
      sum[j][dest] = Math.min(
        sum[j][dest],
        sum[j][k] +
          sum[k + 1][dest] +
          input[j][0] * input[k][1] * input[dest][1]
      );
    }
  }
}
console.log(sum[1][num]);
