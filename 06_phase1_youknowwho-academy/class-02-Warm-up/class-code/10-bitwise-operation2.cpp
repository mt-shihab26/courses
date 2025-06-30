#include <bits/stdc++.h>
using namespace std;

string to_binary0(int x)
{
    string s;
    while (x > 0)
    {
        s += (x % 2 ? '1' : '0');
        x /= 2;
    }
    reverse(s.begin(), s.end());
    return s;
}

string to_binary(int x)
{
    string s;
    for (int i = 30; i >= 0; i--)
    {
        if ((x & (1 << i)) != 0)
            s += '1';
        else
            s += '0';
    }
    return s;
}

int32_t main()
{
    cout << "13 = " << to_binary(13) << "\n";

    int x = 53;
    int y = 28;
    cout << "x = " << to_binary(x);
    cout << ", y = " << to_binary(y) << '\n';

    cout << "AND, OR, XOR:" << '\n';
    cout << to_binary(x & y) << " ";
    cout << to_binary(x | y) << " ";
    cout << to_binary(x ^ y) << "\n";
}