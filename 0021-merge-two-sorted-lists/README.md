## Merge Two Sorted Lists

[Question](https://leetcode.com/problems/merge-two-sorted-lists)

### Approach

1. **Creating a head node**<br>
Start by creating a head node. This node will remain empty (0). We create it as a placeholder to hold items that we get while iterating through the linked lists.

2. **Creating a copy of the head node**<br>
Create a variable called `tail`. Copy the current `head`, and this variable will append linked lists items.

3. **Iterating through the lists**
Begin iterating through both lists while both lists have items. If one of the list reaches the end, it will break the while loop.

4. **Determining the smaller value**<br>
At each step of the iteration, compare the values in `list1` and `list2` by using `list1.val < list2.val`. If the value in `list1` is smaller than the value in `list2`, it indicates that the next node in the merged list should be selected from `list1`.

5. **Updating the head of the merged list**<br>
The smaller of the two values (either from `list1` or `list2`) becomes the new head of the merged list. Connect this node to the head node to start building the merged list.

6. **Advancing the dummy node**<br>
Advance the head node to its next pointer by using `tail = tail.next`. This step sets us up for the next iteration and maintains the order of the merged list.

7. **Handling remaining elements**<br>
After the loop finishes, one of the input lists, either `list1` or `list2`, may contain remaining elements. To handle this, check if one of the lists is empty. For example, if `list1` is null, connect the rest of the merged list to `list2` by setting `head.next = list2`.

8. **Returning the merged list**<br>
The final step is to return the merged list's head. To do this, return `tail.next`. `tail` has been tracking the head of the merged list throughout the merging process, allowing us to obtain the correct starting point for the merged list.

```
var mergeTwoLists = function(list1, list2) {
    var head = new ListNode(0);
    var tail = head;

    while(list1 !== null && list2 !== null) {
        if(list1.val < list2.val) {
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }
        tail = tail.next;
    }

    if(list1 == null) {
        tail.next = list2;
    } else {
        tail.next = list1;
    }

    return head.next;
};
```
