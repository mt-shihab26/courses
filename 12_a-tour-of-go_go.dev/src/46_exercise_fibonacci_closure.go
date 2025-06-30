package main

import "fmt"

func fibonacci() func() int {
	a, b := 0, 1
	return func() int {
		f := a
		a, b = b, a+b
		return f
	}
}

func main() {
	f := fibonacci()
	for i := 0; i < 10; i++ {
		fmt.Println(i, "th: ", f())
	}
}
