#include <bits/stdc++.h>
using namespace std;

#define end '\n'
#define gap ' '
#define int64 long long int
#define str string
#define vec vector

int64 _sum(vec<int64> &a, int i)
{
    if (i == 0)
        return a[i];
    return a[i] + _sum(a, i - 1);
}

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin >> n;
    vec<int64> a(n);
    for (int i = 0; i < n; i++)
        cin >> a[i];

    cout << fixed << setprecision(6);
    cout << _sum(a, n - 1) * 1.0 / n << end;

    return 0;
}
