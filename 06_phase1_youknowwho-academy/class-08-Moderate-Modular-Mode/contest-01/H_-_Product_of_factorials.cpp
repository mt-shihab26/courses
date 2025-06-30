#include <bits/stdc++.h>
using namespace std;

#define ed '\n'
#define gp ' '
#define lli long long int
#define vec vector
#define str string
#define all(x) x.begin(), x.end()

const lli mod = 109546051211;
const int inf = 1e9;

bool solve(int ti = 0)
{
    lli n, result = 1, fact = 1;
    cin >> n;
    for (int i = 1; i <= n; i++)
    {
        fact *= i % mod;
        fact %= mod;
        result = (__int128(result) * fact) % mod;
    }
    cout << result << ed;
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
// Monday, August 01, 2022 | 04:40:36 PM (+06)
