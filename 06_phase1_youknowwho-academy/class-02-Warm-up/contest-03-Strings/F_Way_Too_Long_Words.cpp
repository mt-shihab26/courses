#include <bits/stdc++.h>
using namespace std;

#define _end '\n'
#define _vec vector
#define _str string
#define _len(a) a.size();

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int t;
    cin >> t;
    _str s;
    while (t--)
    {
        cin >> s;
        int len = s.length();
        if (len > 10)
        {
            cout << s[0] << len-2 << s[len - 1] << _end;
        }
        else
        {
            cout << s << _end;
        }
    }

    return 0;
}
