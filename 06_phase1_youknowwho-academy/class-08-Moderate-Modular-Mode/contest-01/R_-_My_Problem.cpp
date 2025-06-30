#include <bits/stdc++.h>
using namespace std;

#define ed '\n'
#define gp ' '
#define ll long long int
#define vec vector
#define str string
#define all(x) x.begin(), x.end()

const int mod = 1e9 + 7;
const int inf = 1e9;

bool solve(int ti = 0)
{
    ll x, y;
    cin >> x >> y;
    if (y % x == 0)
        cout << x << ed;
    else if (y < x)
        cout << y + x << ed;
    else
    {
        ll rem = y % x;
        ll ans = (y / x) * x + rem / 2;
        cout << ans << ed;
    }
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

    return 0;
}
// github.com/shihab4t (Shihab Mahamud)
// Tuesday, August 02, 2022 | 10:55:00 PM (+06)
