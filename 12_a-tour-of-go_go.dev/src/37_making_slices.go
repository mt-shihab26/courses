package main

import "fmt"

func main() {
	a := make([]int, 5)
	printS("a", a)

	b := make([]int, 0, 5) // with 5 capacity
	printS("b", b)

	c := b[:2]
	printS("c", c)

	d := c[2:5]
	printS("d", d)
}

func printS(s string, x []int) {
	fmt.Printf("%s len=%d cap=%d %v\n", s, len(x), cap(x), x)
}
