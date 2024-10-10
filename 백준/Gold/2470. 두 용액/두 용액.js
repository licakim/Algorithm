const fs = require('fs');
const [[N], arr] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(a => a.split(' ').map(b => Number(b)));

arr.sort((a,b) => a-b);

let left = 0;
let right = N-1;
let sum = Infinity;
let answer;

while(left < right)
{
    let tempSum = arr[left]+arr[right];
    if(tempSum === 0)
        return console.log(arr[left]+' '+arr[right]);
    if(sum > Math.abs(tempSum))
    {
        sum = Math.abs(tempSum);
        answer = [arr[left], arr[right]];
    }
    if(tempSum < 0)
        left++;
    else
        right--;
}

console.log(answer[0] + ' '+ answer[1]);
