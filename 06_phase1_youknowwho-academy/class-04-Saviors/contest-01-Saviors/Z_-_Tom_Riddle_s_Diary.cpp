#include <bits/stdc++.h>
using namespace std;

#define ed '\n'
#define gp ' '
#define i64 long long int
#define str string
#define vec vector
#define all(x) x.begin(), x.end()

bool test()
{
    int t;
    cin >> t;
    str s;
    map<str, bool> mp;
    while (t--)
    {
        cin >> s;
        if (mp[s])
        {
            cout << "YES" << ed;
        }
        else
        {
            cout << "NO" << ed;
            mp[s] = true;
        }
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
// Saturday, June 18, 2022 | 06:52:23 PM (+06)
