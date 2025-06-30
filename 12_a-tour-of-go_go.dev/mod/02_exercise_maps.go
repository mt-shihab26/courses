package main

import (
	"fmt"
	"strings"
)

func WordCount(s string) map[string]int {
	m := make(map[string]int)
	sl := strings.Fields(s)
	for _, v := range sl {
		m[v]++
	}
	fmt.Println("Here -> ", m)
	return m
}
