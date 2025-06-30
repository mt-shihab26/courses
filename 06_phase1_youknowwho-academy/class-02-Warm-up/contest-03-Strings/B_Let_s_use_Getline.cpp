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
    getline(cin, s);
    int len = s.length();
    for (int i = 0; i < len; i++)
    {
        if (s[i] == '\\')
            break;
        cout << s[i];
    }
    cout << _end;

    return 0;
}
