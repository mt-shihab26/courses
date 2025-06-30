package main

import (
	"fmt"
)

func sqrt(x int) (mid int) {
	low, high := 1, x
	for low <= high {
		mid = low + ((high - low) / 2)
		// fmt.Println(mid)
		if (mid * mid) == x {
			return mid
		}
		if (mid * mid) < x {
			low = mid + 1
		} else {
			high = mid - 1
		}
	}
	return -1
}

func main() {
	fmt.Println(sqrt(25))
}
