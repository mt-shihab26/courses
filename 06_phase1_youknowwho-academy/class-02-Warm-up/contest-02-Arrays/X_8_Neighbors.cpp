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

    int n, m;
    cin >> n >> m;
    _vec<_str> a(n);
    for (int i = 0; i < n; i++)
        cin >> a[i];
    int x, y;
    cin >> x >> y;
    x--, y--;
    bool is_neighbor = true;

    if (x >= 1 && y >= 1)
    {
        if (a[x - 1][y - 1] != 'x')
            is_neighbor = false;
    }

    if (is_neighbor && x >= 1)
    {
        if (a[x - 1][y] != 'x')
            is_neighbor = false;
    }

    if (is_neighbor && x >= 1 && y < m - 1)
    {
        if (a[x - 1][y + 1] != 'x')
            is_neighbor = false;
    }

    if (is_neighbor && y < m - 1)
    {
        if (a[x][y + 1] != 'x')
            is_neighbor = false;
    }

    if (is_neighbor && y < m - 1 && x < n - 1)
    {
        if (a[x + 1][y + 1] != 'x')
            is_neighbor = false;
    }

    if (is_neighbor && x < n - 1)
    {
        if (a[x + 1][y] != 'x')
            is_neighbor = false;
    }

    if (is_neighbor && x < n - 1 && y >= 1)
    {
        if (a[x + 1][y - 1] != 'x')
            is_neighbor = false;
    }

    if (is_neighbor && y >= 1)
    {
        if (a[x][y - 1] != 'x')
            is_neighbor = false;
    }

    cout << (is_neighbor ? "yes" : "no") << _end;

    return 0;
}
