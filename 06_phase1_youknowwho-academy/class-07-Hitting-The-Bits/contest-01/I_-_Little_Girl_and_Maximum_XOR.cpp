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
    lli l, r;
    cin >> l >> r;

    lli ans = 0, i;

    bitset<60> bl(l);
    bitset<60> br(r);

    for (i = 60; i >= 0; i--)
        if (bl[i] != br[i])
            break;
    for (; i >= 0; i--)
        ans = ans | (1ll << i);

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
// Monday, July 25, 2022 | 10:15:36 AM (+06)
