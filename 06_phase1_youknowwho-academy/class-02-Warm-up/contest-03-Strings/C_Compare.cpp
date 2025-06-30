#include <bits/stdc++.h>
using namespace std;

#define _end '\n'
#define _vec vector
#define _str string
#define _len(a) a.size();

bool cmp(const _str &a, const _str &b)
{
    int a_len = a.length();
    int b_len = b.length();
    int len = min(a_len, b_len);
    for (int i = 0; i < len; i++)
    {
        if (a[i] < b[i])
        {
            return true;
        }
        else if (a[i] > b[i])
        {
            return false;
        }
    }

    if (a_len <= b_len)
    {
        return true;
    }
    else
    {
        return false;
    }
}

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    _str a, b;
    cin >> a >> b;

    if (cmp(a, b))
        cout << a;
    else
        cout << b;
    cout << _end;

    return 0;
}
