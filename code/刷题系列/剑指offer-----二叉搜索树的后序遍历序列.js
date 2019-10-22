//剑指offer-----二叉搜索树的后序遍历序列

//题目描述：输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。
//如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同。

function VerifySquenceOfBST(sequence)
{
    if(sequence.length === 0) {
        return false;
    } else {
        return verifyBST(sequence);
    }
}
function verifyBST(sequence) {
    if(sequence.length < 2) return true;
    let left = [], right = [], pos = true, len = sequence.length;
    let root = sequence[len-1];
    for(let i = 0; i < len-1; i++) {
        if(pos && sequence[i] < root) {
            left.push(sequence[i]);
        } else if(sequence[i] > root){
            pos = false;
            right.push(sequence[i]);
        } else {
            return false;
        }
    }
    return verifyBST(left) && verifyBST(right);
}

//二叉搜索树不是可以为空树嘛？