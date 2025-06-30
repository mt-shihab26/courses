package main

import "errors"

type MyReader struct{}

func (MyReader) Read(b []byte) (int, error) {
	if cap(b) < 1 {
		return 0, errors.New("Can't")
	}
	b[0] = 'A'
	return 1, nil
}
