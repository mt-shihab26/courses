#include <bits/stdc++.h>
using namespace std;

#define ed '\n'
#define gp ' '
#define ull unsigned long long int
#define vec vector
#define str string
#define all(x) x.begin(), x.end()

const int mod = 1e9 + 7;
const int inf = 1e9;

ull power(ull a, ull b, __int128 m)
{
    if (b == 1)
        return a % m;
    ull x = power(a, b / 2, m);
    return (((unsigned __int128)(x)*x) % m * ((b & 1) ? a % m : 1)) % m;
}

bool solve(int ti = 0)
{
    int a, b;
    __int128 m = 0;
    str s;
    cin >> a >> b >> s;
    for (int i = 0; i < s.size(); i++)
        m = m * 10 + s[i] - '0';
    ull ans = power(a, b, m);
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

    return 0;
}
// github.com/shihab4t (Shihab Mahamud)
// Wednesday, August 03, 2022 | 12:11:54 AM (+06)
