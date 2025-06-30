package main

import "fmt"

func main() {
	var s []int
	printS(s)

	// append works on nil slices.
	s = append(s, 100)
	printS(s)

	// The slice grow as needed
	s = append(s, 1)
	printS(s)

	// We can add more than one element at a time.
	s = append(s, 2, 3, 4)
	printS(s)

	s = append(s, 10)
	printS(s)

	s = append(s, 20)
	printS(s)
}

func printS(s []int) {
	fmt.Printf("len=%d cap %d %v\n", len(s), cap(s), s)
}
