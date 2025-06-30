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

int power(int a, int b, int mod)
{
    int res = 1;
    while (b)
    {
        if (b & 1)
            res = (1LL * res * a) % mod;
        a = (1LL * a * a) % mod;
        cerr << a << " " << res << "\n";
        b >>= 1;
    }

    return res;
}

bool solve(int ti = 0)
{
    int a, b, n;
    cin >> a >> b >> n;
    int ans = 1LL * a * power(b, n - 2, n) % n;
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
// Monday, August 01, 2022 | 04:15:54 PM (+06)
