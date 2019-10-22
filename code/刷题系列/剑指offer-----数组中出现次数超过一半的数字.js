//剑指offer-----数组中出现次数超过一半的数字
//题目描述：数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
//例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。由于数字2在数组中出现了5次，
//超过数组长度的一半，因此输出2。如果不存在则输出0。

function MoreThanHalfNum_Solution(numbers)
{
    let res = numbers[0], n = 0, sum = 0;
    numbers.forEach((item) => {
        if(item == res) {
            n++;
        } else if(item != res && n > 0){
            n--;
        } else {
            res = item;
            n = 1;
        }
    })
    numbers.forEach((item) => {
        if(item == res) sum++;
    })
    return sum*2 > numbers.length ? res : 0;
}