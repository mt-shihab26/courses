#include <bits/stdc++.h>
using namespace std;

#define _end_ '\n'
#define _vec_ vector
#define _str_ string
#define _len_(a) a.size()
#define _slen_(s) s.length()

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    const _str_ key = "PgEfTYaWGHjDAmxQqFLRpCJBownyUKZXkbvzIdshurMilNSVOtec#@_!=.+-*/";
    const _str_ original = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    int q;
    _str_ s;
    cin >> q >> s;
    int s_len = s.length();
    _str_ res = "";
    if (q == 1)
    {
        for (int i = 0; i < s_len; i++)
        {
            res += key[original.find(s[i])];
        }
    }
    else
    {
        for (int i = 0; i < s_len; i++)
        {
            res += original[key.find(s[i])];
        }
    }

    cout << res << _end_;

    return 0;
}
