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

    int n, m, tmp;
    cin >> n >> m;

    map<int, int> a;

    for (int i = 0; i < n; i++)
    {
        cin >> tmp;
        a[tmp]++;
    }

    for (int i = 1; i <= m; i++)
    {
        cout << a[i] << _end;
    }

    return 0;
}
