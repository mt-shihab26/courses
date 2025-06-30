#include <bits/stdc++.h>
using namespace std;

#define ed '\n'
#define gp ' '
#define lli long long int
#define vec vector
#define str string
#define all(x) x.begin(), x.end()

const int mod = 998244353;
const int inf = 1e9;

bool solve(int ti = 0)
{
    int ans = 1, n;
    cin >> n;
    for (int i = 1; i <= n; i++)
        ans = 1ll * ans * i % mod;
    cout << ans << ed;
    return true;
}

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    solve();

    return 0;
}
// github.com/shihab4t (Shihab Mahamud)
// Monday, August 01, 2022 | 04:34:47 PM (+06)
