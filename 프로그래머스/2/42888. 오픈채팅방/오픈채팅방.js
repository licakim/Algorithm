function solution(record) {
    var answer = [];
    const userArr = {};
    record = record.map(a => a.split(' '));
    for(let arr of record)
    {
        if(arr[0] === 'Enter')
        {
            userArr[arr[1]] = arr[2];
            answer.push([arr[1],'님이 들어왔습니다.']);
        }
        else if(arr[0] === 'Leave')
            answer.push([arr[1],'님이 나갔습니다.']);
        else
            userArr[arr[1]] = arr[2];
    }
    for (let i = 0; i < answer.length; i++) {
        answer[i][0] = userArr[answer[i][0]];
    }
    answer = answer.map(a => a.join(''));
    return answer;
}

// 1: []
// 2:
