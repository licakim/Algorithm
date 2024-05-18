function solution(n, s) {
  let a = ~~(s / n);
  if (a === 0) return Array.from({ length: 1 }, (e) => -1);
  let b = s % n;
  var answer = Array.from({ length: n }, (e) => a);
  let j = n - 1;
  for (let i = b; i > 0; i--) {
    answer[j--] += 1;
  }
  return answer;
}