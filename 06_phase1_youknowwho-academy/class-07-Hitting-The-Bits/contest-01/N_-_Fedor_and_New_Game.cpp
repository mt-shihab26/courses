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
    int n, m, k, ct = 0, tmp_ct, i;
    cin >> n >> m >> k;
    vec<int> a(m + 2);
    for (i = 1; i <= m + 1; i++)
        cin >> a[i];

    for (i = 1; i <= m; i++)
    {
        tmp_ct = __builtin_popcount((a[i] ^ a[m + 1]));
        if (tmp_ct <= k)
            ct++;
    }

    cout << ct << ed;

    return true;
}

/*
    1 -> 000001
    2 -> 000010
    3 -> 000011
    4 -> 000100

    // 101
    // 110
    // 111
*/

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    solve();

    return 0;
}
// github.com/shihab4t (Shihab Mahamud)
// Sunday, July 24, 2022 | 06:21:04 PM (+06)
