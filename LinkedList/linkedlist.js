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
var mergeTwoLists = function(list1, list2) {
   let result = [];
   for (let i = 0; list1.length > i; i++){
       for (let j = 0; list2.length > j; j++) {

          if (list1[i] <= list2[j]) {
           result.push(list1[i])
           i++;
           }
           if (list2[j] <= list1[i]) {
               result.push(list2[j])
               j++;
           }
       }
   };
   