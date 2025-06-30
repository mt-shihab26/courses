#include <bits/stdc++.h>
using namespace std;

#define ed '\n'
#define gp ' '
#define lli long long int
#define vec vector
#define str string
#define all(x) x.begin(), x.end()

bool solve()
{
    lli n, l, r, x, i, j;
    cin >> n >> l >> r >> x;
    vec<lli> a(n);
    for (i = 0; i < n; i++)
        cin >> a[i];

    lli last = 1 << n, sum, mx, mn, ct = 0; // 1 * 2 ^ n;

    // 2 -> 00000010
    // 1 -> 00000001; 1 << 0
    // 8 -> 1000
    // 7 -> 0111

    for (i = 1; i < last; i++)
    {
        sum = 0, mx = LLONG_MIN, mn = LLONG_MAX;
        for (j = 0; j <= n; j++)
        {
            if (i & (1ll << j))
            {
                sum += a[j];
                mx = max(mx, a[j]);
                mn = min(mn, a[j]);
            }
        }
        cerr << i << " -> " << (bitset<15>(i)) << gp;
        cerr << sum << gp << mx << gp << mn << gp << ct << ed;
        if ((l <= sum && sum <= r) && (mx - mn >= x))
            ct++;
    }

    cout << ct << ed;

    return true;
}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    solve();

    return 0;
}
// github.com/shihab4t (Shihab Mahamud)
// Friday, July 22, 2022 | 03:36:50 AM (+06)
