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

    int a, b;
    cin >> a >> b;
    _str_ s;
    cin >> s;

    int n = _slen_(s);
    bool is = true;
    auto po = s.find('-');

    if (po != string::npos)
    {
        if (po != a)
            is = false;
        else
        {
            for (int i = 0; i < po; i++)
            {
                if ('0' > s[i] || s[i] > '9')
                {
                    is = false;
                }
            }
            for (int i = a + 1, j = 0; j < b; i++, j++)
            {
                if (i == n)
                {
                    is = false;
                }
                if ('0' > s[i] || s[i] > '9')
                {
                    is = false;
                }
            }
        }
    }
    else
    {
        is = false;
    }

    cout << (is ? "Yes" : "No") << _end_;

    return 0;
}
