#include <bits/stdc++.h>
using namespace std;

int main()
{
    int x = 10, y = 20;

    x = x ^ y; // =>                      (x ^ y, y)
    y = x ^ y; // => (x ^ y, x ^ y ^ y) = (x ^ y, x)
    x = x ^ y; // => (x ^ y ^ x, x)     = (y, x)

    cout << x << " " << y << "\n";
}