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

    int n;
    cin >> n;
    _str s;
    cin >> s;

    int ct = 0;
    for (int i = 0; i < n - 1; i++)
    {
        ct++;
        while (s[i] == s[i + 1] && i < n - 1)
        {
            i++;
        }
    }

    if (s[n - 1] != s[n - 2])
        ct++;

    cout << ct << _end;

    return 0;
}
