<?php

class Node
{
    public int $value;
    public ?Node $prev;

    function __construct(int $value, ?Node $prev)
    {
        $this->value = $value;
        $this->prev =  $prev;
    }
}

class Stack
{
    private ?Node $head = null;
    private int $length = 0;
    
    function __construct()
    {
        
    }
    
    function length() : int
    {
        return $this->length;
    }

    function peek(): int|null
    {
        return $this->head?->value;
    }

    function push(int $value): void
    {
        $node = new Node($value, $this->head);
        $this->head = $node;
        $this->length++;
    }

    function pop():int|null 
    {
        $value = $this->peek(); 
        if (!$value) {
            return null;
        }
        $this->head = $this->head->prev;
        $this->length--;
        return $value;
    }
}

function main()
{
    // Create a new instance of Stack
    $stack = new Stack();

    // Test length() method
    $log = [];
    $log[] = "Testing length() method...";
    assert($stack->length() === 0);
    $log[] = "Length is: " . $stack->length();

    // Test push() method
    $log[] = "\nTesting push() method...";
    $stack->push(1);
    assert($stack->length() === 1);
    assert($stack->peek() === 1);
    $log[] = "Pushed 1 onto the stack. Length is now: " . $stack->length();
    $log[] = "Top element is: " . $stack->peek();

    $stack->push(2);
    assert($stack->length() === 2);
    assert($stack->peek() === 2);
    $log[] = "Pushed 2 onto the stack. Length is now: " . $stack->length();
    $log[] = "Top element is: " . $stack->peek();

    // Test pop() method
    $log[] = "\nTesting pop() method...";
    $value = $stack->pop();
    assert($value === 2);
    assert($stack->length() === 1);
    assert($stack->peek() === 1);
    $log[] = "Popped element: " . $value . ". Length is now: " . $stack->length();
    $log[] = "Top element is: " . $stack->peek();

    $value = $stack->pop();
    assert($value === 1);
    assert($stack->length() === 0);
    assert($stack->peek() === null);
    $log[] = "Popped element: " . $value . ". Length is now: " . $stack->length();
    $log[] = "Top element is: " . $stack->peek();

    // Test pop() on an empty stack
    $log[] = "\nTesting pop() on an empty stack...";
    assert($stack->pop() === null);
    $log[] = "Popped element on an empty stack. Length is: " . $stack->length();

    // Output the log
    echo implode("\n", $log) . "\n";

    echo "All tests passed!\n";
}

main();
