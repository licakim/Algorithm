const fs = require("fs");
const [[n], nums] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((a) => a.split(" ").map((b) => Number(b)));

const arr = Array.from({ length: n }).fill(0);

arr[0] = nums[0];

for (let i = 1; i < n + 1; i++) {
  if (arr[i - 1] + nums[i] >= nums[i]) arr[i] = arr[i - 1] + nums[i];
  else if (arr[i - 1] + nums[i] < nums[i]) arr[i] = nums[i];
}

console.log(Math.max(...arr));
