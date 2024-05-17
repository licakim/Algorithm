const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((a) => Number(a));
const [n, k] = input;

let sum = Array.from({ length: n + 1 });
sum[1] = ["1"];
sum[2] = ["1+1", "2"];
sum[3] = ["1+1+1", "1+2", "2+1", "3"];

for (let j = 4; j <= n; j++) {
  sum[j] = [
    ...sum[j - 1].map((a) => "1+" + a),
    ...sum[j - 2].map((a) => "2+" + a),
    ...sum[j - 3].map((a) => "3+" + a),
  ];
}
if (sum[n].length < k) console.log(-1);
else console.log(sum[n][k - 1]);