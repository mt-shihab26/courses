#include <bits/stdc++.h>
using namespace std;

#define ed '\n'
#define gp ' '
#define ll long long int
#define vec vector
#define str string
#define all(x) x.begin(), x.end()

// 2.6666666666667
const int mod = 1e9 + 7;
const int inf = 1e9;

bool solve(int ti = 0)
{
    double h, l;
    cin >> h >> l;
    double ans = ((l * l) - (h * h)) / (2 * h);
    cout << fixed << setprecision(13) << ans << ed;
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
// Monday, August 08, 2022 | 07:18:30 PM (+06)