/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {

    let dummy = new ListNode(-1, null)

    let sort = (current1, current2, track) => {

        if (!current1 && !current2) return
        

        if (!current1 && current2) {
            track.next = current2
            current2 = current2.next
        } else if (current1 && !current2) {
            track.next = current1
            current1 = current1.next
        } else if (current1.val >= current2.val) {
            track.next = current2
            current2 = current2.next
        } else {
            track.next = current1
            current1 = current1.next
        }
        track = track.next

        sort(current1, current2, track)

    }
    sort(list1, list2, dummy)
    return dummy.next
};