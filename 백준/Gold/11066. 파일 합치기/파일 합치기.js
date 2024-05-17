const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((a) => a.split(" ").map((b) => Number(b)));

const T = input[0][0];
for (let i = 0; i < T; i++) {
  let n = input[1 + i * 2][0];
  let arr = input[2 + i * 2];
  const dp = Array.from({ length: n + 1 }, (a) =>
    Array.from({ length: n + 1 }, (a) => 0)
  );
  let sum = 0;
  let t = 0;
  const temp = Array.from({ length: n + 1 }, (a) => 0);
  temp[1] = arr[0];
  for (let o = 2; o < n + 1; o++) {
    temp[o] = temp[o - 1] + arr[o - 1];
  }
  for (let i = 1; i < n; i++) {
    dp[i][i + 1] = arr[i - 1] + arr[i];
  }
  for (let m = 2; m < n; m++) {
    for (let p = 1; p <= n - m; p++) {
      let dest = p + m;
      dp[p][dest] = Infinity;
      for (let l = p; l < dest; l++) {
        dp[p][dest] = Math.min(
          dp[p][dest],
          dp[p][l] + dp[l + 1][dest] + temp[dest] - temp[p - 1]
        );
      }
    }
  }
  console.log(dp[1][n]);
}