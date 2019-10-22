//剑指offer-----复杂链表的复制
//题目描述：输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，
//另一个特殊指针指向任意一个节点），返回结果为复制后复杂链表的head。

/*function RandomListNode(x){
    this.label = x;
    this.next = null;
    this.random = null;
}*/
function Clone(pHead)
{
    if(pHead === null) return null;
    let p = pHead;
    //将新复制节点放在每个对应节点的后面eg：1 -> 1' -> 2 -> 2' -> 3 -> 3' -> null
    while(p) {
        let p1 = new RandomListNode(p.label);
        p1.next = p.next;
        p.next = p1;
        p = p1.next;
    }
    //改变每个新节点的random指针指向
    p = pHead;
    while(p) {
        p.next.random = p.random ? p.random.next : null;
        p = p.next.next;
    }
    //将新链表返回（旧节点删除）
    p = pHead.next;
    pHead.next = null;
    pHead = p;
    while(p.next) {
        let p2 = p.next;
        p.next = p2.next;
        p2.next = null;
        p = p.next;
    }
    return pHead;
}