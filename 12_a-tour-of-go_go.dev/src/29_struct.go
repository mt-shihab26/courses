package main

import "fmt"

type Vertex struct {
	X int
	Y int
}

// Struct literals

var (
	v1 = Vertex{1, 2}
	v2 = Vertex{X: 1}
	v3 = Vertex{}
	p1 = &Vertex{1, 2}
)

func main() {
	v := Vertex{1, 2}
	v.X = 4
	fmt.Println(v)

	// Struct and Pointer
	p := &v
	p.X = 20
	fmt.Println(v.X, (*p).X, p.X)

	fmt.Println(v1, v2, v3, p1)
}
