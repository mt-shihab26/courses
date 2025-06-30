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

string s;
map<char, int> mp;

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin >> n >> s;
    int len = s.size();

    for (int i = 0; i < len; i++)
        mp[s[i]]++;

    string res = "";
    for (auto &it : mp)
    {
        if (it.second % n)
        {
            cout << -1;
            return 0;
        }
        for (int i = 1; i <= it.second / n; i++)
            res += it.first;
    }
    string final_ans = "";
    for (int i = 1; i <= n; i++)
        final_ans += res;
    cout << final_ans;

    return 0;
}
// github.com/shihab4t (Shihab Mahamud)
// Monday, August 08, 2022 | 07:31:25 PM (+06)
