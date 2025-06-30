#include <bits/stdc++.h>
using namespace std;

#define ed '\n'
#define gp ' '
#define lli long long int
#define vec vector
#define str string
#define all(x) x.begin(), x.end()
#define int lli

bool solve()
{
    int n, i, j, ct, tmp_ct;
    cin >> n;
    vec<int> a(n);
    for (i = 0; i < n; i++)
        cin >> a[i];

    /*
        1 ->  00000001
        4 ->  00000100
        3 ->  00000011
        7 ->  00000111
        10 -> 00001010

        1 -> 00000001
        1 -> 00000001
        1 -> 00000001
    */

    ct = 0;
    for (i = 30; i >= 0; i--)
    {
        tmp_ct = 0;
        for (j = 0; j < n; j++)
        {
            if (a[j] & (1 << i))
            {
                tmp_ct++;
                a[j] = 0;
            }
        }
        cerr << tmp_ct;
        ct += (tmp_ct * (tmp_ct - 1)) / 2;
    }
    cerr << ed;

    cout << ct << ed;

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

    return 0;
}
// github.com/shihab4t (Shihab Mahamud)
// Friday, July 22, 2022 | 05:23:56 PM (+06)
