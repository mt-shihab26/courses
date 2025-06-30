#include <bits/stdc++.h>
using namespace std;

#define end '\n'
#define vec vector
#define str string
#define len(a) a.size()
#define slen(s) s.length()
#define gap ' '
#define int32 int
#define int64 long long int

int64 sum(vec<int64> &a, int32 i)
{
    if (i == 0)
        return a[i];
    return a[i] + sum(a, i - 1);
}

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int32 n;
    cin >> n;
    vec<int64> a(n);
    for (int i = 0; i < n; i++)
    {
        cin >> a[i];
    }
    int64 res = sum(a, n - 1);
    cout << res << end;

    return 0;
}
