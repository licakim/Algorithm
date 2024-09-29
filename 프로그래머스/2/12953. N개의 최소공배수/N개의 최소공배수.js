function gcd(a, b) {
  let temp;
  while (b !== 0) {
    temp = a % b;
    a = b;
    b = temp;
  }
  return a;
}

function solution(arr) {
  var answer = 0;
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 1; i++) {
    arr[i + 1] = (arr[i] * arr[i + 1]) / gcd(arr[i + 1], arr[i]);
  }
  answer = arr[arr.length - 1];
  return answer;
}