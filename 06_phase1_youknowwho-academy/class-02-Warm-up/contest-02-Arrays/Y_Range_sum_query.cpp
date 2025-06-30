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

    int n, q, l, r;
    cin >> n >> q;
    _vec<int> a(n+1);
    for (int i = 1; i <= n; i++)
        cin >> a[i];
    _vec<int64_t> pre_sum(n + 1, 0);

    for (int i = 1; i <= n; i++)
    {
        pre_sum[i] = pre_sum[i-1] + a[i];
    }

    while (q--)
    {
        cin >> l >> r;
        cout << pre_sum[r] - pre_sum[l-1] << _end;
    }

    return 0;
}
