//剑指offer-----反转链表

//题目描述：输入一个链表，反转链表后，输出新链表的表头。

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead)
{
    let p1 = null, p2 = null;
    while(pHead != null) {
        p1 = pHead;
        pHead = pHead.next;
        p1.next = p2; 
        p2 = p1;
    }
    return p1;
}
