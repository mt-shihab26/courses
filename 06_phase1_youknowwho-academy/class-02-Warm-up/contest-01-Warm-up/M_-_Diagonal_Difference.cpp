#include <bits/stdc++.h>
using namespace std;

#define endn '\n'
#define vec vector

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n, tmp;
    cin >> n;
    vector<int> a[n];
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            cin >> tmp;
            a[i].push_back(tmp);
        }
    }

    int x = 0;

    for (int i = 0; i < n; i++)
    {
        x += a[i][i];
    }

    int y = 0;
    for (int i = n - 1, j = 0; i >= 0; i--, j++)
    {
        y += a[i][j];
    }

    cout << abs(x - y) << endn;

    return 0;
}
