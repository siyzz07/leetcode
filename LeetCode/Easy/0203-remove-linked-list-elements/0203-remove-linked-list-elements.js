/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    
    const remove = (head,val) => {
        if(!head)return  null

        let current = head
        while ( current && current.val == val){
            current = current.next
        }

        if(!current){
             return  current
        }

        let prev = current
        let h = current

        while(current){
            if(current.val == val){
                prev.next = current.next
                current = prev.next
            }else{
                prev = current
                current = current.next
            }
        }
        return h
    }

   return   remove(head,val)
};