package main

import (
	"fmt"
	"io"
	"os"
	"strings"
)

func rot13(c byte) byte {
	if c < 'N' || c < 'n' {
		c += 13
	} else {
		c -= 13
	}
	return c
}

type rot13Reader struct {
	r io.Reader
}

func (r *rot13Reader) Read(b []byte) (int, error) {
	ln := len(b)
	s := make([]byte, ln)
	ln2, err := r.r.Read(s)
	if err != nil {
		return 0, io.EOF
	}
	for i, c := range s {
		s[i] = rot13(c)
	}
	copy(b, s)
	return ln2, nil
}

func main() {
	f := "Lbh penpxrq gur pbqr!"
	res := ""
	for _, c := range f {
		res += string(rot13(byte(c)))
	}

	fmt.Println(res)

	s := strings.NewReader("Lbh penpxrq gur pbqr!")

	r := rot13Reader{s}
	io.Copy(os.Stdout, &r)
	fmt.Println()
}
