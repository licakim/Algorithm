
function solution(sequence, k) {
  var answer = [];
  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] === k) return [i, i];
  }
  let front = 0;
  let back = 1;
  let sum = sequence[front] + sequence[back];
  while (front <= back && front < sequence.length && back < sequence.length) {
    if (sum === k) {
      if (answer.length != 0) {
        let [x, y] = answer;
        if (y - x > back - front) answer = [front, back];
      } else answer = [front, back];
    }
    if (sum < k) {
      sum += sequence[++back];
    } else {
      sum -= sequence[front++];
    }
  }
  return answer;
}
