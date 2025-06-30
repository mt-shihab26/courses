#include <bits/stdc++.h>
using namespace std;

#define end '\n'
#define vec vector
#define str string
#define len(a) a.size()
#define slen(s) s.length()
#define gap ' '

void swap_row(vec<vec<int>> &a, const int &x, const int &y)
{
    int n = a.size();
    for (int i = 0; i < n; i++)
    {
        a[x][i] = a[x][i] ^ a[y][i];
        a[y][i] = a[x][i] ^ a[y][i];
        a[x][i] = a[x][i] ^ a[y][i];
    }
}

void swap_column(vec<vec<int>> &a, const int x, const int y)
{
    int n = a.size();
    for (int i = 0; i < n; i++)
    {
        a[i][x] = a[i][x] ^ a[i][y];
        a[i][y] = a[i][x] ^ a[i][y];
        a[i][x] = a[i][x] ^ a[i][y];
    }
}

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n, x, y;
    cin >> n >> x >> y;

    vec<vec<int>> a(n, vec<int>(n));

    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            cin >> a[i][j];
        }
    }

    x--, y--;

    swap_row(a, x, y);
    swap_column(a, x, y);

    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            cout << a[i][j] << gap;
        }
        cout << end;
    }

    return 0;
}
