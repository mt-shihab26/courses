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
    lli n, tmp, x = 0;
    cin >> n;

    vec<lli> a(n + 1, 0);

    for (int i = 1; i <= n; i++)
        cin >> a[i];

    vec<lli> count(32, 0);
    for (int i = 0; i <= 31; i++)
    {
        for (int j = 1; j <= n; j++)
        {
            if ((a[j] & (1 << i)))
                count[i]++;
        }
    }

    vec<lli> ans;
    for (int k = 1; k <= n; k++)
    {
        bool flag = true;
        for (int j = 0; j <= 31; j++)
        {
            if (count[j] % k != 0)
            {
                flag = false;
                break;
            }
        }
        if (flag)
            ans.push_back(k);
    }

    for (auto x : ans)
        cout << x << gp;
    cout << ed;
    return true;
}

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int t;
    cin >> t;
    while (t--)
    {
        solve();
    }

    // solve();

    return 0;
}
// github.com/shihab4t (Shihab Mahamud)
// Monday, July 25, 2022 | 06:24:02 AM (+06)
