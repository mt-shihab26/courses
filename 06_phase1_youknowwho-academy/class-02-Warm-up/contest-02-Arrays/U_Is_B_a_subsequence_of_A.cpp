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

    _vec<int> a(n), b(m);

    for (int i = 0; i < n; i++)
        cin >> a[i];
    for (int i = 0; i < m; i++)
        cin >> b[i];

    int i = 0, j = 0;
    while (i < n && j < m)
    {
        if (a[i] == b[j])
            j++;
        i++;
    }

    if (j == m)
        cout << "YES" << _end;
    else
        cout << "NO" << _end;

    return 0;
}
