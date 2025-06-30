package main

import "fmt"

func split(sum int) (x, y int) {
	x = sum % 10
	y = sum - x
	return
}

func main() {
	fmt.Println(split(172))
}
