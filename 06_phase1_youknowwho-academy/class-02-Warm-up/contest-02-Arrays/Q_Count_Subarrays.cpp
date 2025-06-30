#include <bits/stdc++.h>
using namespace std;

#define _end '\n'
#define _vec vector
#define _len(a) a.size();

void solve()
{
    int n;
    cin >> n;
    _vec<int> a(n + 1);
    for (int i = 1; i <= n; i++)
    {
        cin >> a[i];
    }

    int mx, ct = 0;

    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= n - i + 1; j += 1)
        {
            bool is = true;
            for (int k = j, ct = 1; ct < i && k < n; k++, ct++)
            {
                if (a[k] > a[k + 1])
                {
                    is = false;
                    break;
                }
            }
            if (is == true)
            {
                ct++;
            }

            // cout << ": " << mx << _end;
        }
        // cout << _end;
    }
    cout << ct;
    cout << _end;
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
