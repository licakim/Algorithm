function solution(n, computers) {
  var answer = 0;
  let links = Array.from({ length: n }, (a) => []);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i !== j && computers[i][j] === 1) links[i].push(j);
    }
  }
  let visited = Array.from({ length: n }, (a) => 0);

  function bfs(i) {
    let q = [...links[i]];
    while (q.length) {
      let size = q.length;
      while (size > 0) {
        let a = q.shift();
        if (!visited[a]) {
          visited[a] = 1;
          q.push(...links[a]);
        }
        size--;
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!links[i].length) answer++;
    else if (!visited[i]) {
      visited[i] = 1;
      bfs(i);
      answer++;
    }
  }
  return answer;
}
