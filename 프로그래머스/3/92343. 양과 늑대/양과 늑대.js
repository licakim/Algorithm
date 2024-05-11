function solution(info, edges) {
    var answer = 0;
    let links = Array.from({length: info.length}, a => []);
    edges.map(e =>{
        let [from , to] = e;
        links[from].push(to);
    })
    function check_max(current, nodes, sheep, wolf)
    {
        info[current] ? wolf++ : sheep++;
        if(wolf >= sheep) return;
        if(answer < sheep) answer = sheep;
        let possible = [...nodes, ...links[current]];
        possible.splice(nodes.indexOf(current), 1);
        for(let i of possible)
            check_max(i, possible, sheep, wolf);
    }
    check_max(0, [0], 0, 0);
    return answer;
}