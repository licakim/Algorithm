function solution(info, query) {
  var answer = [];
  info = info
    .map((a) => a.split(" "))
    .sort((a, b) => Number(a[4]) - Number(b[4]));
  query = query
    .map((a) => a.split(" "))
    .map((a) => a.filter((b) => b !== "and"));
  let map = new Map();
  for (let i = 0; i < info.length; i++) {
    for (let k = 0; k < 16; k++) {
      let temp = "";
      for (let j = 0; j < 4; j++) {
        if (k & (1 << j)) temp += info[i][j];
        else temp += "-";
      }
      if (!map.has(temp)) map.set(temp, [Number(info[i][4])]);
      else map.get(temp).push(Number(info[i][4]));
    }
  }
  function binarySearch(arr, score) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      let mid = ~~((left + right) / 2);
      if (arr[mid] >= score) right = mid - 1;
      else left = mid + 1;
    }
    return left;
  }

  for (let i = 0; i < query.length; i++) {
    let score = Number(query[i][4]);
    query[i] = query[i].splice(0, 4).join("");
    if (map.has(query[i])) {
      answer.push(
        map.get(query[i]).length - binarySearch(map.get(query[i]), score)
      );
    } else answer.push(0);
  }
  return answer;
}