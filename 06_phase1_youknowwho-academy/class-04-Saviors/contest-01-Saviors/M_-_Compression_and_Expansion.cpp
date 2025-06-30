#include <bits/stdc++.h>
using namespace std;

#define ed '\n'
#define gp ' '
#define i64 long long int
#define str string
#define vec vector
#define all(x) x.begin(), x.end()

bool solve()
{
    int n, tmp;
    cin >> n;
    vec<vec<int>> res;
    while (n--)
    {
        cin >> tmp;
        if (res.empty())
        {
            res.push_back({tmp});
            continue;
        }
        vec<int> top = res[res.size() - 1];
        if (tmp == 1)
        {
            top.push_back(1);
            res.push_back(top);
            continue;
        }
        int i;
        for (i = top.size() - 1; i >= 0; i--)
        {
            if (top[i] == tmp - 1)
            {
                top[i] = tmp;
                break;
            }
        }
        vec<int> val;
        for (int j = 0; j <= i; j++)
        {
            // cerr << top[j] << ' ';
            val.push_back(top[j]);
        }
        res.push_back(val);
        // cerr << ": " << tmp << ed;
    }

    int res_len = res.size();

    for (int i = 0; i < res_len; i++)
    {
        int in_len = res[i].size();
        for (int j = 0; j < in_len; j++)
        {
            cout << res[i][j];
            if (j != res[i].size() - 1)
                cout << ".";
        }
        cout << ed;
    }

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
// Monday, June 20, 2022 | 01:45:01 PM (+06)
