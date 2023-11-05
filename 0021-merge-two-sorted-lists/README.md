## Merge Two Sorted Lists

[Question](https://leetcode.com/problems/merge-two-sorted-lists)

### Approach

1. 
2.
3.
4.
5.
6.



```
var mergeTwoLists = function(list1, list2) {
    var dummy = new ListNode(0);
    var current = dummy;

    while(list1 !== null && list2 !== null) {
        if(list1.val < list2.val) {
            dummy.next = list1;
            list1 = list1.next;
        } else {
            dummy.next = list2;
            list2 = list2.next;
        }
        dummy = dummy.next;
    }

    if(list1 == null) {
        dummy.next = list2;
    } else {
        dummy.next = list1;
    }

    return current.next;
};
```
