function solution(board, skill) {
  var answer = 0;
  let arr = Array.from({ length: board.length + 1 }, (a) =>
    Array.from({ length: board[0].length + 1 }, (a) => 0)
  );
  for (let i = 0; i < skill.length; i++) {
    if (skill[i][0] === 1) skill[i][5] = -skill[i][5];
    arr[skill[i][1]][skill[i][2]] += skill[i][5];
    arr[skill[i][3] + 1][skill[i][4] + 1] += skill[i][5];
    arr[skill[i][3] + 1][skill[i][2]] -= skill[i][5];
    arr[skill[i][1]][skill[i][4] + 1] -= skill[i][5];
  }
  for (let i = 0; i < arr[0].length; i++) {
    for (let j = 1; j < arr.length; j++) {
      arr[j][i] += arr[j - 1][i];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr[0].length; j++) {
      arr[i][j] += arr[i][j - 1];
    }
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] + arr[i][j] > 0) answer++;
    }
  }
  return answer;
}
