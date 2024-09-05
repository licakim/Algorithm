const fs = require("fs");
const [N, M, ...vips] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((a) => Number(a));

const dp = Array.from({ length: N + 1 }).fill(0);

dp[0] = 1;
dp[1] = 1;
dp[2] = 2;

for (let i = 3; i <= N; i++) {
  dp[i] = dp[i - 1] + dp[i - 2];
}

if (M === 0) {
  console.log(dp[N]);
  return;
}

let answer = 1;
let prev = 0;

for (let i of vips) {
  answer *= dp[i - prev - 1];
  prev = i;
}

if (vips[M - 1] !== N) answer *= dp[N - vips[M - 1]];

console.log(answer);
