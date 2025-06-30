#include <bits/stdc++.h>
using namespace std;

#define _end '\n'
#define _vec vector
#define _str string
#define _len(a) a.size();
#define _slen(s) s.length();

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    _str s;
    cin >> s;
    int n = _slen(s);
    _str hello = "hello";
    int hn = _slen(hello);
    int i, j = 0;
    for (i = 0; i < n && j < hn; i++)
    {
        if (s[i] == hello[j])
        {
            j++;
        }
    }

    if (j == hn)
    {
        cout << "YES" << _end;
    }
    else
    {
        cout << "NO" << _end;
    }

    return 0;
}
