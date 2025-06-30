package main

import "fmt"

/* Constants Properties
- Cannot be redeclared/reassigned
- Can only hold scalar or primitive values
- Can hold large high precision number
- Can be created from expressions of other constants
- Can be untyped (kind)
- Constants exit only during compilation time
*/

// one line untyped
const num = 10

// one line typed
const hello string = "Hello World"

const (
	num1 = 10
	num2 = 10.25
	num3 = 1 + 2i

	str1 = "Hello World"

	complexNum complex128 = 1 + 0i
)

func main() {
	const pi = 3.1416
	fmt.Println(pi)
}
