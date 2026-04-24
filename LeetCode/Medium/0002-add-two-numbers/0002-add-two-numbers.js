/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let arr=[]
    let node1 = l1
    let node2 = l2
    function add(node1,node2,arr,quationt=0){
        if(!node1 && !node2 ){
            if( quationt != 0 ){
                arr.push(quationt)
            }
            return 
        }
        let val1 = node1 ?. val ?? 0
        let val2 = node2 ?. val ?? 0
        let sum = val1 + val2   + quationt
        let summm = sum %10
        quationt = Math.floor(sum/10)
            arr.push(summm)
        add(node1?.next || 0,node2?.next || 0,arr,quationt)

    }
    
    add(node1,node2,arr)

    let node = new ListNode(arr[0])
   function addNode(val){
    let current =node
    let newNode = new ListNode(val)
    while (current.next){
        current=current.next
    }
    current.next=newNode
   }

   for(let i=1;i<arr.length;i++){
      addNode(arr[i])
   }
   return node
};