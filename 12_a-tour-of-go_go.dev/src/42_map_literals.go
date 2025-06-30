package main

import "fmt"

type Vertex struct {
	Lat, Long float64
}

var m = map[string]Vertex{
	"Bell Labs": {40.68433, -74.3996},
	"Google":    {37.42202, -122.04408},
}

func main() {
	fmt.Println(m)
}
