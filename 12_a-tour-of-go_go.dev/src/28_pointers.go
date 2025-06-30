package main

import "fmt"

func main() {
	i, j := 42, 2701

	p := &i
	fmt.Println(i, p, *p)
	*p = 21
	fmt.Println(i, p, *p)

	p = &j
	*p = *p / 27
	fmt.Println(j, p, *p)
}
