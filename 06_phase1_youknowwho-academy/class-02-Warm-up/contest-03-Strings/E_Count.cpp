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
    int len = s.length();
    int sum = 0;
    for (int i = 0; i < len; i++)
    {
        sum += s[i] - '0';
    }

    cout << sum << _end;

    return 0;
}
