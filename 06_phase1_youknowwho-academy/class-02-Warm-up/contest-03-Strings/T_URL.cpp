#include <bits/stdc++.h>
using namespace std;

#define _end '\n'
#define _vec_ vector
#define _str_ string
#define _len(a) a.size();
#define _slen(s) s.length();

_str_ __find__(int &pre_p, const _str_ &s, const _str_ &name, int gap, bool is_last)
{
    size_t p_s = s.find(name, pre_p);
    if (is_last)
    {
        _str_ gen(s.begin() + p_s + gap, s.end());
        return gen;
    }
    size_t p_e = s.find("&", p_s);
    _str_ gen(s.begin() + p_s + gap, s.begin() + p_e);
    pre_p = p_e;
    return gen;
}

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    _str_ s;
    cin >> s;
    int pre_p = 0;

    const _str_ username = __find__(pre_p, s, "username", 9, false);
    const _str_ pwd = __find__(pre_p, s, "pwd", 4, false);
    const _str_ profile = __find__(pre_p, s, "profile", 8, false);
    const _str_ role = __find__(pre_p, s, "role", 5, false);
    const _str_ key = __find__(pre_p, s, "key", 4, true);

    cout << "username: " << username << _end;
    cout << "pwd: " << pwd << _end;
    cout << "profile: " << profile << _end;
    cout << "role: " << role << _end;
    cout << "key: " << key << _end;

    return 0;
}
