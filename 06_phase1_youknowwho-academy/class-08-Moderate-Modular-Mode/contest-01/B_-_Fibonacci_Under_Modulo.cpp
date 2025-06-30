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
    int n;
    cin >> n;

    int ans, a = 1, b = 1, tmp;

    // 0 -> a = 1, 1 -> b = 1
    // 1 -> a = 1, 2 -> b = 2
    // 3 -> a = 2, 4 -> b = 3
    // 4 -> a = 3, 5 -> b = 5

    for (int i = 2; i < n; i++)
    {
        tmp = a;
        a = b;
        b = (tmp + b) % mod;
    }
    cout << b << ed;
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
// Monday, August 01, 2022 | 03:50:02 PM (+06)
