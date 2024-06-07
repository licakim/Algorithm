const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((a) => a.split(" ").map((b) => Number(b)));

const N = input[0][0];
let map = input.splice(1, N);
let x, y;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] === 9) [x, y] = [i, j];
  }
}
const direct = [
  [-1, 0],
  [0, -1],
  [0, 1],
  [1, 0],
];

map[x][y] = 0;
let babyshark = 2;
let answer = 0;
let eat = 0;

while (1) {
  let temp = [[x, y]];
  let count = 0;
  let flag = 0;
  let visited = Array.from({ length: N }, (a) =>
    Array.from({ length: N }, (b) => 0)
  );
  let fish = [];
  visited[x][y] = 1;
  while (!fish.length) {
    let size = temp.length;
    if (size === 0) {
      console.log(answer);
      return;
    }
    while (size) {
      let [a, b] = temp.shift();
      for (let i = 0; i < 4; i++) {
        if (
          a + direct[i][0] >= 0 &&
          a + direct[i][0] < N &&
          b + direct[i][1] >= 0 &&
          b + direct[i][1] < N &&
          map[a + direct[i][0]][b + direct[i][1]] <= babyshark
        ) {
          if (
            map[a + direct[i][0]][b + direct[i][1]] > 0 &&
            map[a + direct[i][0]][b + direct[i][1]] < babyshark
          ) {
            fish.push([a + direct[i][0], b + direct[i][1]]);
          } else if (!visited[a + direct[i][0]][b + direct[i][1]]) {
            visited[a + direct[i][0]][b + direct[i][1]] = 1;
            temp.push([a + direct[i][0], b + direct[i][1]]);
          }
        }
      }
      size--;
    }
    count++;
  }
  fish.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];
    return a[1] - b[1];
  });
  [x, y] = fish[0];
  answer += count;
  eat++;
  if (eat === babyshark) {
    eat = 0;
    babyshark += 1;
  }
  map[x][y] = 0;
}
