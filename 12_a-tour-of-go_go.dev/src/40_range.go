package main

import "fmt"

var pow = []int{1, 2, 4, 8, 16, 32, 64, 128}

func main() {
	for i, v := range pow {
		fmt.Printf("2**%d = %d\n", i, v)
		v = 100 // so the v is copy value of ith index
	}
	fmt.Println(pow)

	for _, v := range pow {
		fmt.Println(v)
	}
	fmt.Println()

	for i := range pow {
		fmt.Println(i)
	}
	fmt.Println()
}
