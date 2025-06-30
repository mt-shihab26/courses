#include <bits/stdc++.h>
using namespace std;

int main()
{
    int a, b;
    cin >> a >> b;
    if (a <= b)
    {
        cout << b-a+1 << "\n";
    }
    else
    {
        cout << 0 << "\n";
    }
}