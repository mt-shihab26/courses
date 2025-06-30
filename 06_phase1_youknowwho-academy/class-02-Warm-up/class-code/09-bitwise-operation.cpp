#include <bits/stdc++.h>
using namespace std;

int32_t main()
{
    int x = 2, y = 5;

    cout << (x | y) << "\n";
    cout << (x & y) << "\n";
    cout << (x ^ y) << "\n";

    cout << "\n";

    cout << (5 << 1) << "\n"; // 5 * 2^1 = 10
    cout << (5 << 2) << "\n"; // 5 * 2^2 = 20
    cout << (5 << 3) << "\n"; // 5 * 2^3 = 40
    // so, (n << k) -> n * 2^k

    cout << "\n";

    cout << (80 >> 1) << "\n"; // 80 / 2^1 = 40
    cout << (80 >> 2) << "\n"; // 80 / 2^2 = 20
    cout << (80 >> 3) << "\n"; // 80 / 2^3 = 10
    // so, (n >> k) -> n / 2^k

    cout << pow(2, 10) << "\n";
    cout << (1 << 10) << "\n";
}