//剑指offer-----整数中1出现的次数
//问题描述：求出任意非负整数区间中1出现的次数（从1 到 n 中1出现的次数）

function NumberOf1Between1AndN_Solution(n)
{
    let sum = 0, count, num;
    for(let i = 1; i <= n; i++) {
        num = i;
        count = 0;
        while(num) {
            num % 10 === 1 && ++count;
            num = Math.floor(num/10);
        }
        sum += count;
    }
    return sum;
}