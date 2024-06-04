function solution(n, t, m, p) {
  var answer = "";
  let arr = ["a"];
  for (let i = 0; i < t * m; i++) {
    arr.push(
      ...i
        .toString(n)
        .split("")
        .map((a) => a.toUpperCase())
    );
  }
  let j = 0;
  while (t > 0) {
    answer += arr[j + p];
    t--;
    j += m;
  }
  return answer;
}