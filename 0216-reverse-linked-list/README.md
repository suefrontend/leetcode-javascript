## Reverse Linked List

[Question](https://leetcode.com/problems/reverse-linked-list)

### Approach

#### Iterative solution

1. Initialize `prev` with `null`. This variable will store the next node to help swapping nodes.
2. Use `curr` as a navigator for the linked list by assigning it the value of the current head.
3. `holdNext` temporarily holds the next node.
4. Create a loop to traverse the node while they exist.
5. Temporarily store `curr.next` in `prev` to avoid overwriting its value.
6. Set `curr.next` to `prev`. This action swaps the values of the current node and the previous node.
7. Update `prev` with `curr` to swap the previous node and the current node.
8. Set `curr` to `holdNext`, representing the next node to swap the next node and the current node.
9. Finally, return `prev`. In the while loop, `curr` becomes `holdNext` (the next node). When the loop breaks, `curr` becomes `null`. Returning `prev` ensures that the reversed linked list is returned, as `prev` represents the new head.

```
var reverseList = function(head) {
    var prev = null;
    var curr = head;

    while(curr){
        var holdNext = curr.next;
        curr.next = prev;
        prev = curr;
        curr = holdNext;
    }

    return prev
 };
```

#### Recursion

I'll add later.
