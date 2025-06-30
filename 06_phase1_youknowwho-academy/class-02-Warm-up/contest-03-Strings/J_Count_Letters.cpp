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
    int len = _slen(s);

    map<char, int> mp;

    for (int i = 0; i < len; i++)
    {
        mp[s[i]]++;
    }

    for (auto i : mp)
    {
        cout << i.first << " : " << i.second << _end;
    }

    return 0;
}
