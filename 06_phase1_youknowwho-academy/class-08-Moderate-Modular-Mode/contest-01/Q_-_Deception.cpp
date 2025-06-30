#include <bits/stdc++.h>
using namespace std;

#define ed '\n'

const int mod = 1e9 + 7;

bool solve(int ti = 0)
{
    double x, y;
    cin >> x >> y;

    x = y * log(x) - x * log(y);

    cout << (x > 0 ? ">" : x < 0 ? "<"
                                 : "=")
         << ed;

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
// Tuesday, August 02, 2022 | 02:49:24 PM (+06)
