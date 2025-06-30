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
    getline(cin, s);
    int len = _slen_(s);

    transform(s.begin(), s.end(), s.begin(), ::tolower);

    // cout << s << _end_;

    _str_ tmp = "";
    int ct = 0;
    for (int i = 0; i < len; i++)
    {
        if ('a' <= s[i] && s[i] <= 'z')
        {
            tmp += s[i];
        }
        else
        {
            if (tmp != "")
            {
                // cout << tmp << " ";
                ct++;
                tmp = "";
            }
        }
    }

    if (tmp != "")
    {
        ct++;
    }

    cout << ct << _end_;

    return 0;
}
