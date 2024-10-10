const fs = require('fs');
const  N = Number(fs.readFileSync('/dev/stdin').toString().trim());
if(N <= 3)
{
    if(N === 1)
        console.log(0);
    else
        console.log(1);
    return;
}
let PrimeArr = [2,3];
function find_Prime(N)
{
    let check;
    for(let i = 4; i <= N;  i++)
    {
        check = true;
        for(let j = 2; j*j <= i; j++)
        {
            if(i % j === 0)
            {
                check = false;
                break;
            }
        }
        if(check === true)
            PrimeArr.push(i);
    }
}

find_Prime(N);


let left = 0;
let right = 0;
let answer = 0;
let sum = PrimeArr[0];

while(left <= right && right < PrimeArr.length)
{
    if(sum === N)
        answer++;
    if(sum <= N)
    {
        right++;
        sum+=PrimeArr[right];
    }
    else
    {
        sum-=PrimeArr[left];
        left++;
    }
}

console.log(answer);