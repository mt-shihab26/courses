#include <bits/stdc++.h>
using namespace std;

int main()
{
    long long n;
    cin >> n;

    long long res = n * (n + 1);
    res /= 2;
    cout << res << "\n";
}