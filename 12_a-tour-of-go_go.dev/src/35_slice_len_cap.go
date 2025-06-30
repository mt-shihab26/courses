package main

import "fmt"

func main() {
	s := []int{2, 3, 5, 7, 11, 13}
	printS(s)

	// Slice the slice to give it zero length
	s = s[:0]
	printS(s)

	// Extend its length
	s = s[:4]
	printS(s)

	// Drop its first two values
	s = s[2:]
	printS(s)
}

func printS(s []int) {
	fmt.Printf("len=%d cap=%d %v\n", len(s), cap(s), s)
}
