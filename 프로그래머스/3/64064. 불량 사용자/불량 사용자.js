function solution(user_id, banned_id) {
  var answer = 0;
  const banned_arr = Array.from({ length: banned_id.length }, (a) => []);
  banned_id = banned_id.map((a) => a.replaceAll("*", "."));
  for (let i = 0; i < banned_id.length; i++) {
    let pattern = new RegExp(`^${banned_id[i]}$`);
    banned_arr[i] = user_id.filter((item) => pattern.test(item));
  }
  let res = [];
  function find_set(arr, num) {
    if (num === banned_arr.length) {
      if (arr.length !== new Set(arr).size) return;
      let temp = JSON.stringify(arr.sort());
      if (!res.some((a) => a === temp)) res.push(temp);
      return;
    }
    for (let i = 0; i < banned_arr[num].length; i++) {
      find_set([...arr, banned_arr[num][i]], num + 1);
    }
  }
  find_set([], 0);
  answer = res.length;
  return answer;
}