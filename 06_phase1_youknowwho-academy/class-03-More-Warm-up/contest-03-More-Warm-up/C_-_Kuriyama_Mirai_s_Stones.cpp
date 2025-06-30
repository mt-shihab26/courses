#include <bits/stdc++.h>
using namespace std;

#define ed '\n'
#define gp ' '
#define int64 long long int
#define str string
#define vec vector

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int64 n;
    cin >> n;
    vec<int64> a(n + 1, 0), sorted_p(n + 1, 0), p(n + 3, 0);
    int64 tmp = 0;
    for (int64 i = 1; i <= n; i++)
    {
        cin >> a[i];
        tmp = a[i] + tmp;
        p[i] = tmp;
    }

    sort(a.begin() + 1, a.end());

    tmp = 0;
    for (int64 i = 1; i <= n; i++)
    {
        tmp = a[i] + tmp;
        sorted_p[i] = tmp;
    }

    for (int64 i = 1; i <= n; i++)
        cerr << p[i] << gp;
    cerr << ed;
    for (int64 i = 1; i <= n; i++)
        cerr << sorted_p[i] << gp;

    int64 q, type, l, r;
    cin >> q;
    while (q--)
    {
        cin >> type >> l >> r;
        if (type == 1)
            cout << p[r] - p[l - 1] << ed;
        else
            cout << sorted_p[r] - sorted_p[l - 1] << ed;
    }

    return 0;
}
