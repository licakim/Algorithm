const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map((a) => Number(a));

const hash = {};
for (let i = N + 1; i <= N + M; i++) {
  if (hash[input[i]]) hash[input[i]]++;
  else hash[input[i]] = 1;
}

let answer = 0;
for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= input[i].length; j++) {
    let temp = input[i].slice(0, j);
    if (hash[temp]) {
      answer += hash[temp];
      hash[temp] = 0;
    }
  }
}

console.log(answer);
