#include <bits/stdc++.h>
using namespace std;

#define end '\n'
#define vec vector
#define str string
#define len(a) a.size()
#define slen(s) s.length()
#define gap ' '
#define i64 long long int

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    i64 x, n;
    cin >> x >> n;

    i64 sum = 0;

    for (i64 i = 2; i <= n; i += 2)
    {
        sum += pow(x, i);
    }

    cout << sum << end;

    return 0;
}