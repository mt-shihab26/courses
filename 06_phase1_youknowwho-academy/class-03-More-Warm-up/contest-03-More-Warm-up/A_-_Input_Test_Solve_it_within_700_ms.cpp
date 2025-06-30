#include <bits/stdc++.h>
using namespace std;

#define end '\n'
#define gap ' '
#define int64 long long int
#define str string
#define vec vector

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int t, k;
    cin >> t >> k;
    int ct = 0, tmp;
    while (t--)
    {
        cin >> tmp;
        if (tmp % k == 0)
            ct++;
    }
    cout << ct << end;

    return 0;
}
// Monday, May 23, 2022 | 09:11:06 AM (+06)
