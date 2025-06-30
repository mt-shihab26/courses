// bitwise complement of N = ~N (represented in 2's complement form)
// 2'complement of ~N= -((~(~N))+1) = -(N+1)

// 2's complement = 1's complement + 1

/*

(35)10  = (00100011)2
(-35)10 = -((~(~N))+1)
        = -((~(~00100011))+1)
        = -((~11011100) + 1)
        = -(00100011 + 1)
        = -(00100100)

*/

#include <bits/stdc++.h>
using namespace std;

int main()
{
    int a = -0b00100100;
    int b = ~35;

    cout << a << "\n";
    cout << b << "\n";

    unsigned int ua = ~35;

    cout << ua << "\n";
}