#include <bits/stdc++.h>
using namespace std;

#define _end '\n'
#define _vec vector
#define _str string
#define _len(a) a.size();
#define _slen(s) s.length();

void solve()
{
    _str a, b;
    cin >> a >> b;

    int i = 0;
    int a_len = _slen(a);
    int b_len = _slen(b);

    while (i < a_len && i < b_len)
        cout << a[i] << b[i++];

    if (i == a_len)
        while (i < b_len)
            cout << b[i++];
    else
        while (i < a_len)
            cout << a[i++];
    cout << _end;
}

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int t;
    cin >> t;
    while (t--)
    {
        solve();
    }

    return 0;
}
