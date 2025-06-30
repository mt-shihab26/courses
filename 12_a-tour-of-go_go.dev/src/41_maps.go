package main

import "fmt"

type Vertex struct {
	Lat, Long float64
}

var m map[string]Vertex

func main() {
	fmt.Println(m == nil)

	fmt.Println(m)
	m = make(map[string]Vertex)
	fmt.Println(m == nil)

	m["Bell Labs"] = Vertex{40.68433, -74.39967}

	fmt.Println(m["Bell Labs"])
	fmt.Println(m)
}
