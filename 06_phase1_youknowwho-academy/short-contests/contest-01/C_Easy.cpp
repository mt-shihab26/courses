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
    str s;
    cin >> s;

    int sub_len = s.size() - 1;
    map<str, int> mp;
    for (int i = sub_len; i >= 0; i--)
    {
        int len = s.size() - i + 1;
        for (int j = 0; j < len; j++)
        {
            str sub(s.begin() + j, s.begin() + i + j);
            cerr << sub << gp;
            mp[sub]++;
        }
        cerr << ed;
    }
    int ct = 0;
    for (auto it : mp)
    {
        // cout << it.first << " " << it.second << ed;
        if (it.second >= 2)
            ct = max(ct, int(it.first.length()));
    }
    cout << ct << ed;

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
//