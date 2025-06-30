#include <bits/stdc++.h>
using namespace std;

#define ed '\n'
#define gp ' '
#define ll long long int
#define vec vector
#define str string
#define all(x) x.begin(), x.end()

const int mod = 1e9 + 7;
const int inf = 1e9;

bool solve(int ti = 0)
{
    int a, b;
    cin >> a >> b;
    ll ans = 0;
    if (a > b)
        swap(a, b);
    while (true)
    {
        ans += (b / a);
        if (b % a == 0)
            break;
        else
        {
            int tmp = b % a;
            int tmp2 = a;
            a = min(tmp2, tmp);
            b = max(tmp2, tmp);
        }
    }
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
// Monday, August 08, 2022 | 08:14:30 PM (+06)
