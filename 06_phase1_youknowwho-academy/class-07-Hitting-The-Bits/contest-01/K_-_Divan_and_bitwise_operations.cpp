#include <bits/stdc++.h>
using namespace std;

#define ed '\n'
#define gp ' '
#define lli long long int
#define vec vector
#define str string
#define all(x) x.begin(), x.end()

const int mod = 1e9 + 7;

bool solve(int ti = 0)
{
    int n, m;
    cin >> n >> m;
    int l, r, x;
    lli an = 0;
    while (m--)
    {
        cin >> l >> r >> x;
        an |= x;
    }
    an %= mod;

    for (int i = 1; i < n; i++)
        an = (1LL * an * 2) % mod;

    cout << an << ed;

    return true;
}

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int t, ti;
    cin >> t;
    for (ti = 0; ti < t; ti++)
    {
        solve(ti);
    }

    // solve();

    return 0;
}
// github.com/shihab4t (Shihab Mahamud)
// Wednesday, July 27, 2022 | 12:21:35 AM (+06)
