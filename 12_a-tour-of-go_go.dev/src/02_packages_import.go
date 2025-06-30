package main

// Factored import statement
import (
	"fmt"
	"math/rand"
	"time"
)

func main() {
	rand.Seed(time.Now().Unix())
	fmt.Println(rand.Intn(100))
}
