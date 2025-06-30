#include <bits/stdc++.h>
using namespace std;

#define end '\n'
#define gap ' '
#define int64 long long int
#define str string
#define vec vector

bool is_possible(vec<int> a, int i, int sm, int x)
{
    if (i == 0)
    {
        sm = sm + a[i];
        if (sm == x)
            return true;
        return false;
    }
    int res = is_possible(a, i - 1, sm + a[i], x);
    if (res)
        return true;
    res = is_possible(a, i - 1, sm - a[i], x);
    if (res)
        return true;
    return false;
}

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n, x;
    cin >> n >> x;
    vec<int> a(n);
    for (int i = 0; i < n; i++)
        cin >> a[i];

    cout << (is_possible(a, n - 1, 0, x) ? "YES" : "NO") << end;

    return 0;
}
