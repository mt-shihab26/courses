#include <bits/stdc++.h>
using namespace std;

#define ed '\n'
#define gp ' '
#define int64 long long int
#define str string
#define vec vector

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    str s, t;
    cin >> s >> t;

    int len = s.length(), ct = 0;
    for (int i = 0; i < len; i++)
    {
        if (s[i] != t[i])
        {
            ct++;
        }
    }

    cout << ct << ed;

    return 0;
}
