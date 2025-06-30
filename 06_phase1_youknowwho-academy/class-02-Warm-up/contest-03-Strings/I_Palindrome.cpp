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

    _str s;
    cin >> s;
    int i = 0, j = s.length() - 1;

    while (i < j)
    {
        if (s[i++] != s[j--])
        {
            cout << "NO" << _end;
            return 0;
        }
    }
    cout << "YES" << _end;

    return 0;
}
