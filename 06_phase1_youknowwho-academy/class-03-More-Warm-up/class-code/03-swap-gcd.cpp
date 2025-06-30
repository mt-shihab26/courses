#include <bits/stdc++.h>
using namespace std;

int main()
{
    int a = 20, b = 10;
    int tmp = a;
    a = b;
    b = tmp;

    cout << a << " " << b << "\n";

    swap(a, b);
    cout << a << " " << b << "\n";

    a = a + b;
    b = a - b;
    a = a - b;
    cout << a << " " << b << "\n";

    int a2 = 12, b2 = 16;

    cout << __gcd(a2, b2) << "\n";
}