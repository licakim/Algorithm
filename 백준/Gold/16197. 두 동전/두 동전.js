const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [row, col] = input[0].split(" ").map((a) => Number(a));
const arr = input.splice(1, row).map((a) => a.split(""));

let coin = [];
for (let i = 0; i < row; i++) {
  for (let j = 0; j < col; j++) {
    if (arr[i][j] == "o") coin.push([i, j]);
  }
}
let dt = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

function check_range(x, y) {
  if (x >= 0 && x < row && y >= 0 && y < col) return 1;
  else return 0;
}

let q = [coin[0], coin[1]];
let count = 0;
let visited1 = Array.from({ length: row }, (a) =>
  Array.from({ length: col }, (b) => 0)
);
let visited2 = Array.from({ length: row }, (a) =>
  Array.from({ length: col }, (b) => 0)
);

while (q.length) {
  let size = q.length / 2;
  while (size > 0) {
    let [x1, y1] = q.shift();
    let [x2, y2] = q.shift();
    visited1[x1][y1] = 1;
    visited1[x2][y2] = 1;
    for (let i = 0; i < 4; i++) {
      let temp1 = check_range(x1 + dt[i][0], y1 + dt[i][1]);
      let temp2 = check_range(x2 + dt[i][0], y2 + dt[i][1]);
      if ((temp1 && !temp2) || (!temp1 && temp2)) {
        count++;
        if (count > 10) console.log(-1);
        else console.log(count);
        return;
      } else if (temp1 && temp2) {
        if (
          visited1[x1 + dt[i][0]][y1 + dt[i][1]] &&
          visited1[x2 + dt[i][0]][y2 + dt[i][1]]
        ) {
          continue;
        }
        if (
          arr[x1 + dt[i][0]][y1 + dt[i][1]] == "#" &&
          arr[x2 + dt[i][0]][y2 + dt[i][1]] == "#"
        )
          continue;
        if (arr[x1 + dt[i][0]][y1 + dt[i][1]] != "#")
          q.push([x1 + dt[i][0], y1 + dt[i][1]]);
        else q.push([x1, y1]);
        if (arr[x2 + dt[i][0]][y2 + dt[i][1]] != "#")
          q.push([x2 + dt[i][0], y2 + dt[i][1]]);
        else q.push([x2, y2]);
      }
    }
    size--;
  }
  count++;
  if (count > 10) {
    console.log(-1);
    return 1;
  }
}

console.log(-1);