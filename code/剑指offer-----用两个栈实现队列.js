//剑指offer-----用两个栈实现队列

//题目描述：用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。

let stackPush = [], stackPop = [];
function push(node)
{
    return stackPush.push(node);
}
function pop()
{
    if(stackPop.length === 0) {
        while(stackPush.length !== 0) {
            stackPop.push(stackPush.pop());
        }
    }
    return stackPop.pop()
}