#include <bits/stdc++.h>
using namespace std;

#define _end '\n'
#define _vec vector
#define _len(a) a.size();

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin >> n;
    _vec<int> a(n);

    int mn = INT_MAX;
    for (int i = 0; i < n; i++)
    {
        cin >> a[i];
        mn = min(mn, a[i]);
    }

    int ct = 0;
    for (int i = 0; i < n; i++)
    {
        if (a[i] == mn)
        {
            ct++;
        }
    }

    if (ct % 2 == 0)
    {
        cout << "Unlucky" << _end;
    }
    else
    {
        cout << "Lucky" << _end;
    }

    return 0;
}
