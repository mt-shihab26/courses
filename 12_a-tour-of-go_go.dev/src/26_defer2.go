package main

import "fmt"

func main() {
	fmt.Println("Before a()")
	defer a()
	fmt.Println("After a()")
}

func a() {
	fmt.Println("Before b()")
	defer b()
	fmt.Println("After b()")
}

func b() {
	fmt.Println("Inside b()")
}
