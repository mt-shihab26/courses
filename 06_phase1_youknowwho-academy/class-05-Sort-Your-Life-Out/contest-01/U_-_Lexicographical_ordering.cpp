#include <bits/stdc++.h>
using namespace std;

#define ed '\n'
#define gp ' '
#define lli long long int
#define vec vector
#define str string

bool solve()
{
    str orders, a, b;
    cin >> orders >> a >> b;
    int len = orders.size();

    map<char, int> order_mp;
    for (int i = 1; i <= len; i++)
        order_mp[orders[i - 1]] = i;

    int len_a_b = a.size();
    for (int i = 0; i < len_a_b; i++)
    {
        if (order_mp[a[i]] > order_mp[b[i]])
        {
            cout << ">" << ed;
            return true;
        }
        else if (order_mp[a[i]] < order_mp[b[i]])
        {
            cout << "<" << ed;
            return true;
        }
    }

    cout << "=" << ed;
    return true;
}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int t;
    cin >> t;
    while (t--)
    {
        solve();
    }

    return 0;
}
// github.com/shihab4t (Shihab Mahamud)
// Friday, July 08, 2022 | 05:31:36 AM (+06)
