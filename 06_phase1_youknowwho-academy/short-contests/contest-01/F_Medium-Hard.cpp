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

bool solve1(int ti = 0)
{
    str s;
    cin >> s;
    int n = s.size();
    cerr << s << ed;
    str ans = "";
    ans += s[0];
    char first = s[0];
    int first_ct = 1;
    for (int i = 1; i < n; i++)
    {
        cerr << ans << ed;

        if (s[i] > first)
        {
            ans = "";
            ans += s[i];
            first = s[i];
            first_ct = 1;
        }
        else if (s[i] > ans.back())
        {
            while (s[i] > ans.back())
                ans.pop_back();
            ans += s[i];
        }
        else
        {
            ans += s[i];
        }
    }
    cout << ans << ed;

    return true;
}

bool solve()
{
    str s, ans = "";
    cin >> s;
    int l = 0, len = s.size();
    for (char c = 'z'; c >= 'a'; c--)
    {
        for (int i = l; i <= len; i++)
        {
            if (s[i] == c)
            {
                ans += c;
                l = i;
            }
        }
    }
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
//