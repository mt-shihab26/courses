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

    int t, n;
    _str_ s;
    cin >> t;
    while (t--)
    {
        cin >> s;
        n = _slen_(s);
        bool is = false;

        for (int i = 0; i < n - 2; i++)
        {
            if ((s[i] == '0' && s[i + 1] == '1' && s[i + 2] == '0') || (s[i] == '1' && s[i + 1] == '0' && s[i + 2] == '1'))
            {
                is = true;
                break;
            }
        }
        cout << (is ? "Good" : "Bad") << _end_;
    }

    return 0;
}
