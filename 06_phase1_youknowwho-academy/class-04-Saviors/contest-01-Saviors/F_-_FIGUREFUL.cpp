#include <bits/stdc++.h>
using namespace std;

int main()
{
    int n, a, b;
    cin >> n;
    string c;
    map<pair<int, int>, string> mp;
    for (int i = 0; i < n; i++)
    {
        cin >> a >> b >> c;
        mp[{a, b}] = c;
    }
    int q;
    cin >> q;
    while (q--)
    {
        cin >> a >> b;
        cout << mp[{a, b}] << "\n";
    }
}