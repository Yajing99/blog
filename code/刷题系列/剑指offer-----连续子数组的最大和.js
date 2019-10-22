//剑指offer-----连续子数组的最大和
//题目描述：{6,-3,-2,7,-15,1,2,2},连续子向量的最大和为8
//(从第0个开始,到第3个为止)。给一个数组，返回它的最大连续子序列的和

function FindGreatestSumOfSubArray(array)
{
    let max = Number.MIN_SAFE_INTEGER, sum = 0;
    for(let i = 0, len = array.length; i < len; i++) {
        sum += array[i];
        max = Math.max(max, sum);
        sum = sum < 0 ? 0 : sum;
    }
    return max;
}
