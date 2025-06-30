package main

import "fmt"

type Vertex struct {
	X, Y float64
}

func (v *Vertex) Scale(f float64) {
	v.X = v.X * f
	v.Y = v.Y * f
}

func ScaleFunc(v *Vertex, f float64) {
	v.X = v.X * f
	v.Y = v.Y * f
}

func main() {
	v := Vertex{3, 4}
	fmt.Print(v, "\n\n") // 30, 40

	v.Scale(10)
	fmt.Print(v, "\n\n") // 300, 400

	(&v).Scale(10)
	fmt.Print(v, "\n\n") // 3000, 4000

	p := &v
	p.Scale(10)
	fmt.Println(v)        // 30000, 40000
	fmt.Print(*p, "\n\n") // 30000, 40000

	ScaleFunc(&v, 10)
	fmt.Print(v, "\n\n") // 300000, 400000

	p2 := &Vertex{4, 3}
	p2.Scale(3)
	fmt.Println(*p2) // 12, 9

	ScaleFunc(p2, 8)
	fmt.Print(*p2, "\n\n") // 96, 72

	fmt.Println(v, p, p2)
}
