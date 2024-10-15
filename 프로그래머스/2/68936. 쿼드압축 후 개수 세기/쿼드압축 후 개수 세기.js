function solution(arr) {
    var answer = [0,0];
    
    function check(t, len)
    {
        let standard = arr[t[0]][t[1]];
        for(let i = t[0]; i < t[0]+len; i++)
        {
            for(let j = t[1]; j < t[1]+len; j++)
            {
                if(arr[i][j] !== standard)
                    return false;
            }
        }
        return true;
    }

    function dfs(i, j, len)
    {
        let center = len / 2;
        let temp = [[i,j], [i,j+center], [i+center, j], [i+center, j+center]];
        for(let t of temp)
        {
            if(center === 1)
                answer[arr[t[0]][t[1]]]++;
            else if(check(t,center))
                answer[arr[t[0]][t[1]]]++;
            else
                dfs(t[0],t[1],center);
        }
    }
    if(arr.every(a => a.every(b => b === arr[0][0])))
    {
        answer[arr[0][0]]++;
        return answer;
    }
    if(arr.length === 1)
    {
        answer[arr[0][0]]++;
        return answer;
    }
    dfs(0,0, arr.length);
    return answer;
}
