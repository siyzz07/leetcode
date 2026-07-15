/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    function reverse(head) {
        let prev = null;
        let current = head;
        while (current) {
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        return prev
    }

    head = reverse(head)
    let index = 1;
    let current = head;
    let prev = null;
    while (current) {
        if (index === n) {
            if (prev) {
                prev.next = current.next;
            } else {
                head = current.next;
            }
            break;
        }
        prev = current;
        current = current.next;
        index++;
    }
    head=reverse(head)
    return head

};

















