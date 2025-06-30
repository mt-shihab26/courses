#include <bits/stdc++.h>
using namespace std;

#define ed '\n'
#define gp ' '
#define lli long long int
#define vec vector
#define str string

bool solve()
{
    int n, q, m, ans, i;
    cin >> n;
    vec<int> a(n);
    for (i = 0; i < n; i++)
        cin >> a[i];

    sort(a.begin(), a.end());

    cin >> q;
    while (q--)
    {
        cin >> m;
        auto it = upper_bound(a.begin(), a.end(), m);
        ans = it - a.begin();
        cout << ans << ed;
    }

    return true;
}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    solve();

    return 0;
}
// github.com/shihab4t (Shihab Mahamud)
// Tuesday, July 05, 2022 | 07:04:07 PM (+06)
