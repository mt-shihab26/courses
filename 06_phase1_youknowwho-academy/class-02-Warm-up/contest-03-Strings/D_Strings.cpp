#include <bits/stdc++.h>
using namespace std;

#define _end '\n'
#define _vec vector
#define _str string
#define _len(a) a.size();

int len(const _str &s)
{
    return s.length();
}

_str concat(const _str &s, const _str &s2)
{
    _str res = "";
    int s_len = s.length(), s2_len = s2.length();
    for (int i = 0; i < s_len; i++)
    {
        res += s[i];
    }
    for (int i = 0; i < s2_len; i++)
    {
        res += s2[i];
    }
    return res;
}

void _swap_(char &a, char &b)
{
    char tmp = a;
    a = b;
    b = tmp;
}

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    _str s1, s2;
    cin >> s1 >> s2;

    cout << len(s1) << " " << len(s2) << _end;
    cout << concat(s1, s2) << _end;
    _swap_(s1[0], s2[0]);
    cout << s1 << " " << s2 << _end;

    return 0;
}
