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

    str s, ans = "";
    cin >> s;
    int len = s.length();

    if (len == 1)
    {
        cout << s << ed;
        return 0;
    }

    for (int i = 0; i < len; i += 2)
    {
        ans += s[i];
    }

    cout << ans << ed;

    return 0;
}
