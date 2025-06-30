#include <bits/stdc++.h>
using namespace std;

#define end '\n'
#define vec vector
#define str string
#define len(a) a.size()
#define slen(s) s.length()
#define gap ' '
#define i32 int
#define i64 long long int

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    i32 n, m;
    cin >> n >> m;
    vec<i64> a(n);
    for (int i = 0; i < n; i++)
        cin >> a[i];

    i64 sum = 0;
    for (int i = n - 1, j = 1; j <= m; j++, i--)
        sum += a[i];

    cout << sum << end;

    return 0;
}
