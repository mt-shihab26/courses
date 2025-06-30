#include <bits/stdc++.h>
using namespace std;

#define _end_ '\n'
#define _vec_ vector
#define _str_ string
#define _len_(a) a.size()
#define _slen_(s) s.length()

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    _str_ s;
    cin >> s;
    int n = _slen_(s), ct = 0, i;
    _str_ res;
    for (i = 0; i < n - 4; i++)
    {
        _str_ sub = s.substr(i, 5);
        if (sub == "EGYPT")
        {
            res += " ";
            i += 4;
        }
        else
            res += s[i];
    }
    res += s.substr(i);

    cout << res << _end_;

    return 0;
}
