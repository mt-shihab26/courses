#include <bits/stdc++.h>
using namespace std;

#define ed '\n'
#define gp ' '
#define i64 long long int
#define str string
#define vec vector

bool solve()
{
    int n, tmp;
    cin >> n;
    map<int, int> mp;
    for (int i = 0; i < n; i++)
    {
        cin >> tmp;
        mp[tmp]++;
    }
    int m = INT_MIN;
    for (auto i : mp)
    {
        m = max(m, i.second);
    }

    int ans, x = n % 2;

    if (m <= n / 2)
        ans = x;
    else
        ans = 2 * m - n;
    cout << ans << ed;

    return true;
}

bool test()
{
    int t;
    cin >> t;
    while (t--)
    {
        solve();
    }
    return true;
}

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    test();

    return 0;
}
// Shihab Mahamud (github.com/shihab4t)
