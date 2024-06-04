const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((a) => a.split(" ").map((a) => Number(a)));

const [student, num] = input[0];

let arr = Array.from({ length: student + 1 }, (a) =>
  Array.from({ length: student + 1 }, (b) => 0)
);

for (let i = 1; i <= num; i++) {
  let [small, tall] = input[i];
  arr[small][tall] = 1;
  arr[tall][small] = 2;
}

for (let mid = 1; mid <= student; mid++) {
  for (let i = 1; i <= student; i++) {
    for (let j = 1; j <= student; j++) {
      if (arr[i][j] || i == j) continue;
      if (arr[i][mid] == 1 && arr[mid][j] == 1) {
        arr[i][j] = 1;
        arr[j][i] = 2;
      } else if (arr[i][mid] == 2 && arr[mid][j] == 2) {
        arr[i][j] = 2;
        arr[j][i] = 1;
      }
    }
  }
}
let answer = 0;
for (let i = 1; i <= student; i++) {
  let c = 0;
  for (let j = 1; j <= student; j++) {
    if (i != j && arr[i][j] == 0) c++;
  }
  if (c === 0) answer++;
}

console.log(answer);
