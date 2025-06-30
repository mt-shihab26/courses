#include <bits/stdc++.h>
using namespace std;

int main()
{
    long long int n;
    cin >> n;
    map<int, int> mp;
    long long int total = 1, tmp, tmp_n = n, extra_total = 1;
    while (n--)
    {
        cin >> tmp;
        mp[tmp]++;
        total = total + n;
    }
    total--;

    for (auto i : mp)
    {
        auto tmp = i.second;
        while (tmp--)
            total -= tmp;
    }
    cout << total << "\n";
}