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
    int len = _len(s);
    for (int i = 0; i < len; i++)
    {
        if (s[i] == ',')
            cout << " ";
        else if (s[i] >= 'a' && s[i] <= 'z')
            cout << (char)(s[i] - 32);
        else
            cout << (char)(s[i] + 32);
    }
    cout << _end;

    return 0;
}
