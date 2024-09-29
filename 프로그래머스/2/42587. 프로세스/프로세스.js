function solution(priorities, location) {
  let sorted = [...priorities];
  sorted.sort((a, b) => b - a);
  const map = new Map();
  let i = 0;
  priorities.map((p) => {
    map[i++] = p;
  });
  i = 0;
  let q = Array.from({ length: sorted.length }, (a) => i++);
  let count = 1;
  while (q.length) {
    let temp = q.shift();
    if (sorted[0] !== map[temp]) q.push(temp);
    else {
      if (temp === location) {
        return count;
      }
      sorted.shift();
      count++;
    }
  }
}
