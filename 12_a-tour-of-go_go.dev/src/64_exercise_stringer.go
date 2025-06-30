package main

import "fmt"

type IPAddr [4]byte

func (ip IPAddr) String() (m string) {
	for _, v := range ip {
		m += fmt.Sprintf("%v.", v)
	}
	return m[:len(m)-1]
}

func main() {
	hosts := map[string]IPAddr{
		"loopback":  {127, 0, 0, 1},
		"googleDNS": {8, 8, 8, 8},
	}
	for name, ip := range hosts {
		fmt.Printf("%v: %v\n", name, ip)
	}
}
