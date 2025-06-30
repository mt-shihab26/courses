#include <bits/stdc++.h>
using namespace std;

#define ed '\n'
#define ll long long int
const ll mod = 109546051211;

int power(int a, int b, int m)
{
    ll ans = 1;
    while (b)
    {
        if (b & 1)
            ans = 1LL * ans * a % m;
        a = (1LL * a * a) % m;
        b /= 2;
    }
    return ans;
}
bool solve(int ti = 0)
{
    int a, b;
    cin >> a >> b;
    int ans = 1, tmp = 1;
    cout << power(a, b, 10) << ed;
    return true;
}

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int t;
    cin >> t;
    while (t--)
        solve();
    return 0;
}
// github.com/shihab4t (Shihab Mahamud)
// Tuesday, August 02, 2022 | 11:37:08 AM (+06)
