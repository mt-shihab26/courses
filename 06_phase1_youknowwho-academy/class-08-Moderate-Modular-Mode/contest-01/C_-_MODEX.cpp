#include <bits/stdc++.h>
using namespace std;

#define ed '\n'
#define gp ' '
#define lli long long int
#define vec vector
#define str string
#define all(x) x.begin(), x.end()

const int mod = 1e9 + 7;
const int inf = 1e9;

int bigmod(int a, int b, int mod)
{
    if (b == 1)
        return a % mod;

    int res = bigmod(a, b / 2, mod);

    res = (1LL * res * res) % mod;
    if (b % 2 == 1)
        res = (1LL * res * a) % mod;

    return res;
}

bool solve(int ti = 0)
{
    int a, b, n;
    cin >> a >> b >> n;

    int ans = bigmod(a, b, n);
    cout << ans << ed;

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

    cin >> t;

    return 0;
}
// github.com/shihab4t (Shihab Mahamud)
// Monday, August 01, 2022 | 04:06:02 PM (+06)
