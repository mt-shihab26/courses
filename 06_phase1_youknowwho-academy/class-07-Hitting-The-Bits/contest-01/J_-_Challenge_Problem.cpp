#include <bits/stdc++.h>
using namespace std;

#define ed '\n'
#define gp ' '
#define lli long long int
#define vec vector
#define str string
#define all(x) x.begin(), x.end()

const int mod = 1e9 + 7;

bool solve()
{
    lli n, i, j, b;
    cin >> n;
    vec<lli> a(n + 1);

    vec<lli> cnt(65, 0);

    for (i = 0; i < n; i++)
    {
        cin >> a[i];
        for (b = 0; b <= 60; b++)
            if ((a[i] >> b) & 1)
                cnt[b]++;
    }

    lli ans = 0, tmp;

    for (j = 0; j < n; j++)
    {
        lli and_value = 0;
        lli c = a[j];
        lli or_value = 0;
        for (b = 0; b <= 60; b++)
        {
            tmp = (1ll << b) % mod;
            if ((c >> b) & 1)
            {
                and_value = (and_value + tmp * cnt[b]) % mod;
                or_value = (or_value + tmp * n) % mod;
            }
            else
            {
                and_value = (and_value + tmp * 0) % mod;
                or_value = (or_value + tmp * cnt[b]) % mod;
            }
        }
        ans = (ans + and_value * or_value) % mod;
    }

    cout << ans << ed;

    return true;
}

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int t;
    cin >> t;
    while (t--)
    {
        solve();
    }

    return 0;
}
// github.com/shihab4t (Shihab Mahamud)
// Tuesday, July 26, 2022 | 07:14:03 AM (+06)
