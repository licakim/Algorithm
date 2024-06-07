const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((a) => a.split(" ").map((b) => Number(b)));

let [N, M, x, y, K] = input[0];
const arr = input.splice(1, N);
const move = input[1];
const dice = [0, 0, 0, 0, 0, 0, 0]; //
const direct = [1, 2, 4, 3, 5, 6]; // bottom, top, left, right, down, opposite

for (let k of move) {
  if (k === 1 && y + 1 < M) {
    y += 1;
    let temp = direct[0];
    direct[0] = direct[3]; //right이 bottom
    direct[3] = direct[5]; //opposite이 right
    direct[5] = direct[2]; // left가 opposite
    direct[2] = temp;
    if (arr[x][y] === 0) arr[x][y] = dice[direct[0]];
    else {
      dice[direct[0]] = arr[x][y];
      arr[x][y] = 0;
    }
    console.log(dice[direct[5]]);
  }

  if (k === 2 && y - 1 >= 0) {
    y -= 1;
    let temp = direct[2];
    direct[2] = direct[5];
    direct[5] = direct[3];
    direct[3] = direct[0];
    direct[0] = temp;
    if (arr[x][y] === 0) arr[x][y] = dice[direct[0]];
    else {
      dice[direct[0]] = arr[x][y];
      arr[x][y] = 0;
    }
    console.log(dice[direct[5]]);
  }

  if (k === 3 && x - 1 >= 0) {
    x -= 1;
    let temp = direct[1];
    direct[1] = direct[5]; //opposite -> top
    direct[5] = direct[4]; //down -> opposite;
    direct[4] = direct[0]; // bottom -> down
    direct[0] = temp; //top -> bottom
    if (arr[x][y] === 0) arr[x][y] = dice[direct[0]];
    else {
      dice[direct[0]] = arr[x][y];
      arr[x][y] = 0;
    }
    console.log(dice[direct[5]]);
  }

  if (k === 4 && x + 1 < N) {
    x += 1;
    let temp = direct[0];
    direct[0] = direct[4]; //down -> bottom
    direct[4] = direct[5];
    direct[5] = direct[1];
    direct[1] = temp;
    if (arr[x][y] === 0) arr[x][y] = dice[direct[0]];
    else {
      dice[direct[0]] = arr[x][y];
      arr[x][y] = 0;
    }
    console.log(dice[direct[5]]);
  }
}
