#include <bits/stdc++.h>
using namespace std;

#define ed '\n'
#define gp ' '
#define lli long long int
#define vec vector
#define str string
#define all(x) x.begin(), x.end()

const lli mod = 1e9 + 7;

bool solve()
{
    lli n, k;
    cin >> n >> k;

    lli ans = 1;

    for (int i = 0; i < k; i++)
        ans = ((ans * n) % mod);

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
// Friday, July 22, 2022 | 04:47:09 PM (+06)
