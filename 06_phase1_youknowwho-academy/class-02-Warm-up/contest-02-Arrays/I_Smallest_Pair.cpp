#include <bits/stdc++.h>
using namespace std;

#define _end '\n'
#define _vec vector
#define _len(a) a.size();

void solve()
{
    int n;
    cin >> n;
    _vec<int> a(n);
    for (int i = 0; i < n; i++)
    {
        cin >> a[i];
    }

    int mn = INT_MAX;

    for (int i = 0; i < n; i++)
    {
        for (int j = i + 1; j < n; j++)
        {
            mn = min(mn, a[i] + a[j] + j - i);
        }
    }

    cout << mn << _end;
}

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin >> n;
    while (n--)
    {
        solve();
    }

    return 0;
}
