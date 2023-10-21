/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {

    if(lists.length == 0)
        return null; //to return empty array

    while(lists.length > 1) {
        merge2Lists(lists);
    }

    return lists[0];
    
};

function merge2Lists(lists) {

    let list1 = lists.shift();
    let list2 = lists.shift();

    let dummyHead = curr = new ListNode(-1, null);

    while(list1 && list2) {

        if(list1.val <= list2.val) {
            curr.next = list1;
            list1 = list1.next;
        } else {
            curr.next = list2;
            list2 = list2.next;
        }

        curr = curr.next;

    }

    if(list1) {
       curr.next = list1; 
    }

    if(list2) {
       curr.next = list2; 
    }

    lists.push(dummyHead.next);

}