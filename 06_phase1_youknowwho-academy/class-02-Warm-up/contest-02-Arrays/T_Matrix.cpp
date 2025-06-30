#include <bits/stdc++.h>
using namespace std;

#define _end '\n'
#define _vec vector
#define _str string
#define _len(a) a.size();

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin >> n;

    _vec<_vec<int>> a(n, _vec<int>(n));

    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            cin >> a[i][j];
        }
    }

    int res = 0;

    for (int i = 0; i < n; i++)
    {
        res += a[i][i];
    }

    for (int i = 0; i < n; i++)
    {
        res -= a[i][n - i - 1];
    }

    cout << abs(res) << _end;

    return 0;
}
