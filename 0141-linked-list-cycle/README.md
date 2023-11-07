## Linked List Cycle

[Question](https://leetcode.com/problems/linked-list-cycle)

### Approach

For this question, use two pointers.

1. **Set two pointers**<br>
   Create two variables named `slow` and `fast`. The `slow` pointer advances one node at a time, and the `fast` pointer advances two nodes at a time. Initialize both pointers with the input `head` node.
2. **Set while loop**<br>
   Use a while loop with the condition `while (fast && fast.next)` to traverse the list. This condition ensures that `fast` pointer doesn't become `null`. If the `fast` pointer becomes null, it means that it has reached the end of the linked list.
3. **Advance pointers**<br>
   In each iteration of the loop, advance both pointers with `slow.next` and `fast.next.next`.
4. **Chech if it's in a cycle**<br>
   When the `slow` and `fast` pointers meet at the same node, it indicates the presence of a cycle. In this case, return `true`.
5. **Not a cycle**<br>
   If the pointers never meet, it suggests that there is no cycle in the linked list. In this case, return `false`.

```
var hasCycle = function(head) {
    var slow = head;
    var fast = head;

    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next;
        if(slow == fast) {
            return true;
        }
    }
    return false;
};
```
